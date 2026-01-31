import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getGeminiAdvisor = async (history: ChatMessage[]) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

  if (!apiKey) {
    return "The AI consultation engine is currently being configured. Please reach out to us directly at concierge@otb.capital for immediate assistance.";
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `
    You are the "Outside the Box Real Estate" Strategy Consultant.
    Your tone is empathetic, professional, approachable, and creative.
    Your mission: Help homeowners in difficult situations find WIN-WIN outcomes.

    KEY PRINCIPLES:
    1. Equity Preservation: Suggest ways the owner can keep their equity.
    2. Creative Financing: Mention options like Subject-To, Seller Carry Back, Equity Sharing, or Renovation Partnerships.
    3. Community First: Avoid recommending predatory "cash for houses" low-ball offers unless it's truly the owner's preferred fast exit.
    4. Honesty: Be realistic about market conditions while remaining optimistic about creative solutions.

    NEVER use salesy or aggressive language.
    If the user describes a problem (foreclosure, repairs needed, probate), outline a creative 'outside the box' plan.
    Keep responses concise and visually clean with markdown.
  `;

  try {
    const chatHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: chatHistory.length > 0 ? chatHistory : [{ role: 'user', parts: [{ text: "Hello, I need some creative real estate help." }] }],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "I'm sorry, I'm having trouble thinking of a solution right now. Could you tell me a bit more about your situation?";
  } catch (error) {
    console.error("Strategy Error:", error);
    return "I encountered an error while analyzing your situation. Please try again or reach out to us directly.";
  }
};
