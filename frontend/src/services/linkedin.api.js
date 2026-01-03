import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "YOUR_SANITY_PROJECT_ID",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});

export const fetchLinkedinPosts = () =>
  client.fetch(`
    *[_type == "linkedinPost"] | order(publishedAt desc) {
      _id,
      title,
      summary,
      themes,
      originalLink,
      "image": coverImage.asset->url
    }
  `);
