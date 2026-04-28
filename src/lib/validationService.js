import Ajv from 'ajv';

const ajv = new Ajv();

const aiContractSchema = {
  type: "object",
  properties: {
    intent: { 
      type: "string",
      enum: ["REGISTER_VOTER", "CHECK_NAME", "UPDATE_DETAILS", "VOTING_PROCESS", "LEARN_ELECTIONS", "UNKNOWN", "ERROR"]
    },
    suggestions: {
      type: "array",
      items: { type: "string" },
      maxItems: 5
    },
    message: { type: "string" }
  },
  required: ["intent", "suggestions", "message"],
  additionalProperties: false
};

const validateAIResponse = ajv.compile(aiContractSchema);

export class ArchitecturalBreachError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "ArchitecturalBreachError";
    this.details = details;
  }
}

export const validateAIContract = (data) => {
  const isValid = validateAIResponse(data);
  if (!isValid) {
    throw new ArchitecturalBreachError(
      "AI output failed strict JSON schema contract validation",
      validateAIResponse.errors
    );
  }
  return data;
};
