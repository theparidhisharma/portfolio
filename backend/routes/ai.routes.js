import express from 'express';
const router = express.Router();

// Route: POST /api/ai/summary
router.post('/summary', async (req, res) => {
  try {
    // 1. Get the text from the CMS request body
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "No text provided for summarization" });
    }

    // 2. Perform Summarization (Mock Logic)
    // TODO: Replace this mock string with a real OpenAI/Gemini API call later
    const mockSummary = `AI Generated: This post discusses "${text.substring(0, 20)}..." and highlights key engineering insights. (Generated at ${new Date().toLocaleTimeString()})`;

    // 3. Send back the JSON format your CMS expects
    res.json({ summary: mockSummary });

  } catch (error) {
    console.error("AI Route Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;