import { useState } from "react";
import { useClient } from "sanity";

export function GenerateSummaryAction(props) {
  const { id, type, published } = props;
  const client = useClient();
  const [loading, setLoading] = useState(false);

  // Show only for LinkedIn posts
  if (type !== "linkedinPost") return null;

  const onGenerate = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/ai/generate-summary",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: published.title,
            themes: published.themes || []
          })
        }
      );

      const { summary } = await res.json();

      await client
        .patch(id)
        .set({ summary })
        .commit();

      alert("Summary generated and saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return {
    label: loading ? "Generating…" : "Generate Summary",
    onHandle: onGenerate
  };
}
