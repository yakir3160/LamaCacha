const { GoogleGenAI } = require("@google/genai");

const API_KEY = "YOUR_API_KEY_HERE"; 

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function testChat() {
  try {
    console.log("Testing chat with correct params...");
    const chatSession = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [], 
    });

    try {
        console.log("Trying sendMessage({ message: 'Hello' })...");
        const result = await chatSession.sendMessage({
            message: 'Hello'
        });
        console.log("Success!", result.text);
    } catch (e) {
        console.error("Error:", e);
    }

  } catch (error) {
    console.error("Global Error:", error);
  }
}

testChat();
