const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/plan-trip',async(req,res)=>{
    const {destination} = req.body;

    try {
        const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});
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
      }
        `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const cleanJson = text.replace(/```json|```/g, "").trim();
        res.json(JSON.parse(cleanJson));
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Failed to generate plan" });
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT : ${process.env.PORT}`);
    
})