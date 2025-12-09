import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Catch Concierge", an expert culinary assistant for "The Catch Seafood & Sushi" in West Palm Beach, FL.
Your goal is to help guests navigate the menu, make pairing suggestions, and answer questions about our Peruvian fusion cuisine and sushi.
You are sophisticated, friendly, and knowledgeable.

Key Selling Points to Mention when relevant:
- Beautiful outdoor dining available.
- "You Hook It, We Cook It" service (guests bring fresh catch, we cook it).
- Live music and friendly atmosphere.
- 2021 Travelers' Choice Award Winner.

Here is the current menu data you must stick to:
${JSON.stringify(MENU_ITEMS)}

Rules:
1. Only recommend items from the provided menu.
2. If a user asks for something not on the menu, politely suggest a similar alternative from the menu.
3. Keep answers concise (under 100 words) and appetizing.
4. If asked about reservations, say we take them online or via phone at (561) 842-2180.
5. If asked about location, we are at 529 25th Street, West Palm Beach, FL 33407.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history // Pass previous context
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "I apologize, I'm having trouble connecting to the kitchen right now. Please ask your server.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently busy helping other guests. Please try again in a moment.";
  }
};