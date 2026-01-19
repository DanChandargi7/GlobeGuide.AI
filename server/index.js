const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// 1. Updated CORS settings
app.use(cors({
  origin: "https://globe-guide-ai.vercel.app", 
  methods: ["GET", "POST", "OPTIONS"], // Added OPTIONS and GET
  credentials: true,
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Simple GET route to test if server is working
app.get("/", (req, res) => res.send("GlobeGuide API is running!"));

// 3. FIXED ROUTE PATH (Removed the full URL)
app.post('/api/plan-trip', async (req, res) => {
    const { destination } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" }); // Note: check your model name (usually 1.5-flash)
        const prompt = `
        Create a 3-day travel itinerary for ${destination}. 
        Return only a JSON object with the following structure:
        {
          "days": [
            { "content": "Morning: ... Afternoon: ... Evening: ..." },
            { "content": "..." },
            { "content": "..." }
          ],
          "advice": "one short local tip",
          "weather": "current typical temperature in Celsius"
        }`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const cleanJson = text.replace(/```json|```/g, "").trim();
        res.json(JSON.parse(cleanJson));
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Failed to generate plan" });
    }
});

// Vercel handles the port automatically, but this keeps local dev working
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});

module.exports = app; // Required for Vercel