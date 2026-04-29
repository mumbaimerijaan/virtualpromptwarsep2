import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '../.env' }); // Load from root .env

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Initialize Gemini - using the same package but on the backend now.
// In a real ADC environment, you wouldn't pass the API key explicitly 
// if the environment was properly configured with Workload Identity.
// For this dummy implementation, we still use the key from .env.
const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the intent router for the "Matdaan Saathi" mobile application...
(Same system instruction as frontend, but securely isolated on backend)
...
You MUST respond with a JSON object.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are the smart assistant for the 'Matdaan Saathi' mobile application. 
        
        Your instructions:
        1. If the user asks a factual question about Indian elections that you know is TRUE (e.g., 'Minimum age to vote?', 'What is EPIC?'), return a short ONE-LINE answer in the 'message' field and set intent to 'FACT_REPLY'.
        2. For any other queries where you cannot provide a direct factual answer or guidance, set intent to 'UNKNOWN' and respond EXACTLY with the message: 'I can help with voter services and election guidance.'
        
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

    // Here we would normally use AJV to strictly validate resultObj before returning it.
    // For now, we just pass it back.
    
    res.json(resultObj);

  } catch (error) {
    console.error('AI Processing Error:', error);
    
    // Gracefully handle leaked API key or other Gemini errors to satisfy the contract
    res.json({
      intent: 'ERROR',
      message: 'I am having trouble connecting to my knowledge base right now. Please try one of the popular topics.',
      suggestions: ['Register as a voter', 'Check voter list', 'How to vote']
    });
  }
});

app.listen(port, () => {
  console.log(`Dummy backend proxying AI requests on port ${port}`);
});
