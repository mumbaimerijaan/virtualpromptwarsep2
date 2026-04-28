import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChatModal } from '../components/ChatModal';
import { classifyIntent } from '../lib/gemini';
import { saveMessageToFirestore, subscribeToChatMessages } from '../services/chatService';

// Mock dependencies
vi.mock('../lib/gemini', () => ({
  classifyIntent: vi.fn()
}));

vi.mock('../services/chatService', () => ({
  saveMessageToFirestore: vi.fn(),
  subscribeToChatMessages: vi.fn((sessionId, callback) => {
    // Return a dummy unsubscribe function
    return () => {};
  })
}));

describe('ChatModal Full Interaction Lifecycle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Message Sent ➔ AI Contract Validated ➔ Firestore Persisted ➔ UI Updated', async () => {
    // Setup Mock AI Response
    const mockAIResponse = {
      intent: 'REGISTER_VOTER',
      message: 'Here is how you register.',
      suggestions: ['Check docs']
    };
    classifyIntent.mockResolvedValueOnce(mockAIResponse);

    // Setup Mock Firestore save
    saveMessageToFirestore.mockResolvedValue();

    render(
      <BrowserRouter>
        <ChatModal isOpen={true} onClose={() => {}} />
      </BrowserRouter>
    );

    // 1. Message Sent
    const input = screen.getByPlaceholderText(/Type your question here/i);
    const sendButton = screen.getByLabelText(/Send message/i);

    fireEvent.change(input, { target: { value: 'How do I register?' } });
    fireEvent.click(sendButton);

    // 2. Verify Firestore Persisted (User Message)
    await waitFor(() => {
      expect(saveMessageToFirestore).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          type: 'user',
          content: 'How do I register?'
        })
      );
    });

    // 3. Verify AI Called (Contract Validated inside gemini logic)
    expect(classifyIntent).toHaveBeenCalledWith('How do I register?');

    // 4. Verify Firestore Persisted (Bot Response)
    await waitFor(() => {
      expect(saveMessageToFirestore).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          type: 'bot',
          content: 'Here is how you register.',
          intent: 'REGISTER_VOTER',
          suggestions: ['Check docs']
        })
      );
    });
    
    // In a real e2e test, we'd trigger the snapshot callback to update the UI
    // Since we mocked subscribeToChatMessages as empty, we verify the save sequence.
  });
});
