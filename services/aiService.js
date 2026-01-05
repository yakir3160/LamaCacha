import axios from 'axios';

const API_KEY = "AIzaSyD8K-Ozc3Qe3E_wiOqG0rHqpMmG_lIrmoA    ".trim(); // וודא שוב שהמפתח מעודכן!
const MODEL_NAME = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

export const generateText = async (prompt) => {
  // 1. בדיקת תקינות הקלט (Validation) - קריטי למניעת שגיאה 400
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    console.error("Invalid Prompt:", prompt);
    throw new Error("הפרומפט שנשלח ריק או אינו תקין.");
  }

  try {
    // 2. בניית הגוף (Body) בצורה מסודרת
    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    console.log("Sending Body:", JSON.stringify(requestBody)); // לוג לדיבוג - תסתכל במסוף!

    const response = await axios.post(
      API_URL, 
      requestBody, 
      {
        params: { key: API_KEY },
        headers: { 'Content-Type': 'application/json' }
      }
    );

    if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return response.data.candidates[0].content.parts[0].text;
    }
    return "התקבלה תשובה ריקה.";

  } catch (error) {
    if (error.response) {
      // הדפסה מפורטת של השגיאה מגוגל
      console.error("Google API Error:", error.response.status, error.response.data);
      
      if (error.response.status === 400) {
        console.log(error.response);
        
        throw new Error("שגיאת תוכנה (400): מבנה הבקשה לא תקין. בדוק את ה-Prompt.");
      }
      if (error.response.status === 429) {
        throw new Error("יותר מדי בקשות (429). המתן ונסה שוב.");
      }
    } else {
      console.error("Network Error:", error.message);
    }
    throw error;
  }
};