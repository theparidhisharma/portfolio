const fetch = require("node-fetch");

const run = async () => {
  const res = await fetch("http://localhost:5000/api/ai/generate-summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Two Months of Meaningful Growth at Deutsche Telekom Digital Labs",
      themes: ["Backend Engineering", "Kafka", "Microservices", "Internship"]
    })
  });

  const data = await res.json();
  console.log(data.summary);
};

run();
