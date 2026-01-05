import { GoogleGenAI } from "@google/genai";

// הערה: מומלץ להעביר את המפתח לקובץ .env
const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || "YOUR_API_KEY_HERE"; 

const ai = new GoogleGenAI({ apiKey: API_KEY });

// משתנה לשמירת ה-Session של הצ'אט (Singleton)
let chatSession = null;

export const sendChatMessage = async (input) => {
  try {
    // אתחול ה-Session אם הוא לא קיים
    if (!chatSession) {
      // שימוש ב-SDK החדש (@google/genai)
      // הפונקציה ai.chats.create יוצרת אובייקט שמנהל את השיחה באופן אוטומטי.
      // האובייקט הזה (chatSession) שומר בתוכו את כל היסטוריית ההודעות (הקשר השיחה).
      chatSession = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [], 
      });
    }

    // 2. שליחה ל-Gemini
    // ב-SDK החדש, הפונקציה מצפה לאובייקט עם שדה message
    // כאשר שולחים הודעה דרך chatSession.sendMessage, ה-SDK מבצע שני דברים:
    // 1. שולח את ההודעה החדשה יחד עם כל ההיסטוריה שנצברה למודל.
    // 2. מוסיף אוטומטית את ההודעה החדשה ואת התשובה שהתקבלה להיסטוריה הפנימית של ה-session.
    // כך נשמר רצף השיחה ללא צורך בניהול ידני של מערך ההודעות.
    const result = await chatSession.sendMessage({
      message: input
    });
    
    // קבלת הטקסט מהתשובה
    const responseText = result.text; 

    // החזרת התשובה לקומפוננטה כדי שהיא תוסיף אותה ל-UI
    return responseText;

  } catch (e) {
    console.error("Chat Error:", e);
    throw e;
  }
};