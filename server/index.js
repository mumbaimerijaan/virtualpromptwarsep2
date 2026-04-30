import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

// ES Module path support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the intent router for the "Matdaan Saathi" mobile application...
(Same system instruction as frontend, but securely isolated on backend)
...
You MUST respond with a JSON object.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, history } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Convert history to Gemini format if present
    const contents = history && history.length > 0 
      ? history.map(m => ({ role: m.type === 'user' ? 'user' : 'model', parts: [{ text: m.content }] }))
      : [];
    
    contents.push({ role: 'user', parts: [{ text: prompt }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: contents,
      config: {
        systemInstruction: `You are the smart assistant for the 'Matdaan Saathi' mobile application. 
        
        Your instructions:
        1. If the user asks a factual question about Indian elections that you know is TRUE (e.g., 'Minimum age to vote?', 'What is EPIC?'), return a short ONE-LINE answer in the 'message' field and set intent to 'FACT_REPLY'.
        2. If the user query is a follow-up or requires context from the history, use the provided conversation history to maintain continuity.
        3. For any other queries where you cannot provide a direct factual answer or guidance, set intent to 'UNKNOWN' and respond EXACTLY with the message: 'I can help with voter services and election guidance.'
        
        You MUST respond with valid JSON containing:
        - intent: FACT_REPLY or UNKNOWN
        - message: The one-line answer or the mandatory fallback string
        - suggestions: Array of 2-3 related topics`,
        responseMimeType: "application/json",
      }
    });

    const resultText = response.text();
    let resultObj;
    try {
        resultObj = JSON.parse(resultText);
    } catch (e) {
        console.error("Failed to parse Gemini output:", resultText);
        throw new Error("Invalid response format from AI");
    }
    
    res.json(resultObj);

  } catch (error) {
    console.error('AI Processing Error:', error);
    res.json({
      intent: 'ERROR',
      message: 'I am having trouble connecting to my knowledge base right now. Please try one of the popular topics.',
      suggestions: ['Register as a voter', 'Check voter list', 'How to vote']
    });
  }
});

// Catch-all route to serve the frontend for any non-API routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Unified server running on port ${port}`);
});

// Graceful Termination for Cloud Run
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});

