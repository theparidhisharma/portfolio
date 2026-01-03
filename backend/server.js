import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/linkedin", (req, res) => {
  res.json([
    {
      title: "Orchestrating Microservices",
      snippet: "Deep dive into Kafka consumer groups and offset management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://www.linkedin.com/in/theparidhisharma/",
      date: "Recent"
    }
  ]);
});

app.listen(4000, () => {
  console.log("✅ Server running on http://localhost:4000");
});
