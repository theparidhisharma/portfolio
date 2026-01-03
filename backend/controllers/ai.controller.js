const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generateSummary = async (req, res) => {
  const { title, themes } = req.body;

  if (!title || !Array.isArray(themes)) {
    return res.status(400).json({
      error: "title and themes are required"
    });
  }

  const prompt = `
You are summarizing a LinkedIn post for a software engineering portfolio.

Title: "${title}"
Themes: ${themes.join(", ")}

Write a concise 3–4 line professional summary.
No emojis. Recruiter-friendly. Technical focus.
`;

  try {
    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      });

    res.json({
      summary:
        completion.choices[0].message.content
    });
  } catch (err) {
    console.error("AI summary error:", err.message);
    res.status(500).json({
      error: "Failed to generate summary"
    });
  }
};

module.exports = { generateSummary };
