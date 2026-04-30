import { validateAIContract } from './validationService';

/**
 * Executes a network request with Jittered Exponential Backoff.
 * 
 * @param {Function} requestFn - A function returning a Promise.
 * @param {number} maxRetries - Maximum number of retries.
 * @param {number} baseDelayMs - Base delay in milliseconds.
 * @returns {Promise<any>}
 */
const withExponentialBackoff = async (requestFn, maxRetries = 3, baseDelayMs = 500) => {
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      return await requestFn();
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        throw error;
      }
      
      // Exponential backoff with full jitter
      const exponentialDelay = baseDelayMs * Math.pow(2, attempt);
      const jitter = Math.random() * exponentialDelay;
      const delay = Math.floor(jitter);
      
      console.warn(`Network request failed. Retrying attempt ${attempt} in ${delay}ms...`, error);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

/**
 * Calls the local proxy backend (simulating ADC/Workload Identity).
 */
export async function classifyIntent(query, history = []) {
  try {
    const fetchAI = async () => {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt: query,
          history: history.slice(-5) // Send last 5 messages for context
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    };

    // 1. Fetch with Jittered Exponential Backoff
    const rawResponse = await withExponentialBackoff(fetchAI, 3);
    
    // 2. Enforce Contract Validation (Zero-Trust Architectural Audit)
    // Throws ArchitecturalBreachError if the schema is violated
    const validatedData = validateAIContract(rawResponse);
    
    return validatedData;

  } catch (error) {
    console.error("Gemini Intent Classification Error:", error);
    
    // If it's our strict AJV schema validation failing, log it distinctly
    if (error.name === 'ArchitecturalBreachError') {
       console.error("🚨 Zero-Trust Breach: The AI deviated from the JSON contract.", error.details);
    }
    
    // Graceful Fallback
    return {
      intent: "ERROR",
      message: "I can help with voter services and election guidance.",
      suggestions: [
        "Register as a voter",
        "Check voter list",
        "How to vote"
      ]
    };
  }
}
