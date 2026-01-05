### **מצגת שיעור 8: עבודה עם API ואינטגרציה עם Gemini AI**

-----

### **שקופית 1: נושאי השיעור**

  * **האתגר:** הפיכת האפליקציה לדינמית וחכמה.
  * **תיאוריה:** תכנות אסינכרוני (Async/Await) ובקשות רשת.
  * **הכלים:** השוואה בין `fetch` ל-`axios`.
  * **ניהול מצב:** Loading, Error, Response.
  * **פרויקט מעשי:** חיבור האפליקציה למודל השפה של גוגל (Gemini).
  * **אבטחה:** ארכיטקטורת Client-Server ושמירה על מפתחות.

-----

### **שקופית 2: למה אנחנו צריכים API?**

עד היום, המידע באפליקציה היה קבוע בקוד. באפליקציה אמיתית, הנתונים מגיעים משרת מרוחק.

**הבעיה:** בקשת רשת לוקחת זמן. אנחנו חייבים לוודא שהאפליקציה לא "קופאת" בזמן ההמתנה.
**הפתרון:** קוד אסינכרוני (Asynchronous Code). האפליקציה ממשיכה לעבוד בזמן שהנתונים נטענים ברקע.

-----

### **שקופית 3: הכלי הבסיסי – `fetch`**

React Native מגיעה עם פונקציית `fetch` מובנית.

**איך זה נראה בקוד?**

```javascript
const getData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const json = await response.json(); // המרה ידנית ל-JSON
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
```

-----

### **שקופית 4: הכלי המקצועי – `Axios`**

בתעשייה נעדיף את ספריית `axios`.

**למה עדיף Axios?**

1.  **קוד נקי:** המרה אוטומטית ל-JSON (חוסך שורה).
2.  **טיפול בשגיאות:** זורק שגיאה אוטומטית אם השרת מחזיר שגיאה (404/500).
3.  **Config:** קל להגדיר הגדרות גלובליות.

**התקנה:** `npm install axios`

-----

### **שקופית 5: תיאוריה – סוגי בקשות (HTTP Methods)**

כשאנחנו מדברים עם שרת, יש לנו "פעלים" עיקריים. נתמקד בשניים:

1.  **GET:** "תביא לי מידע". הנתונים עוברים ב-URL.
2.  **POST:** "קח מידע ותעבד אותו". הנתונים עוברים ב-Body של הבקשה.

**בפרויקט שלנו נשתמש ב-POST כדי לשלוח טקסט (Prompt) ל-Gemini.**

-----

### **שקופית 6: אזהרת אבטחה (Architecture Warning)**

🛑 **נקודה קריטית!**

כדי לדבר עם Gemini, צריך **API Key**. זהו מפתח סודי.
**הכלל:** באפליקציית Production, המפתח **לעולם** לא יושב בקוד האפליקציה (Client), אלא בשרת שלכם (Backend).

*לצורך התרגול בכיתה בלבד: נשים את המפתח בקוד, אבל נזכור שזה "לא חוקי" בעולם האמיתי.*

-----

### **שקופית 7: הקמת השירות (Service Layer)**

ניצור פונקציה שתטפל בתקשורת מול גוגל.

**קובץ: `services/aiService.js`**

```javascript
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const generateText = async (prompt) => {
  try {
    const response = await axios.post(API_URL, {
      contents: [{ parts: [{ text: prompt }] }]
    });
    // נחזיר את כל האובייקט כדי שנוכל לפרק אותו בקומפוננטה
    return response.data; 
  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
};
```

-----

### **שקופית 8: ממשק המשתמש (Chat UI)**

נבנה מסך פשוט: שדה טקסט, כפתור שליחה, ואזור תשובה.

**ניהול ה-State:**

```javascript
const [prompt, setPrompt] = useState(''); // מה המשתמש מקליד
const [result, setResult] = useState(''); // התשובה מה-AI
const [loading, setLoading] = useState(false); // האם אנחנו מחכים?
```

**הפונקציה בקומפוננטה:**

```javascript
const handleSend = async () => {
  setLoading(true);
  try {
    const rawData = await generateText(prompt);
    // חילוץ כירורגי של הטקסט מתוך ה-JSON המורכב
    const cleanText = rawData.candidates[0].content.parts[0].text;
    setResult(cleanText);
  } catch (e) {
    setResult("Error generating response");
  } finally {
    setLoading(false);
  }
};
```

-----

### **שקופית 9: תצוגה מתקדמת – אפקט כתיבה (Typewriter Effect)**

כדי לתת תחושה של "חשיבה" וזרימה (כמו ב-ChatGPT), ניצור קומפוננטה שמדפיסה את הטקסט תו-אחרי-תו, במקום להציג "בלוק" טקסט בבת אחת.

**קומפוננטת `Typewriter`:**

```javascript
const Typewriter = ({ text, delay = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text]);

  return <Text style={{ fontSize: 16 }}>{displayedText}</Text>;
};
```

-----

### **שקופית 10: סיכום ותרגיל כיתה**

**מה עשינו?**

1.  למדנו על ההבדל בין `fetch` ל-`axios`.
2.  ביצענו בקשת **POST** מורכבת לשרת חיצוני (Google API).
3.  שדרגנו את ה-UX עם אפקט כתיבה (Typewriter).

**המשימה שלכם:**

1.  הוציאו API Key ב-Google AI Studio.
2.  בנו מסך "יועץ טיולים": המשתמש כותב עיר, והאפליקציה מציגה טיפים.
