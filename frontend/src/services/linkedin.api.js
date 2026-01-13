export const fetchLinkedInPosts = async () => {
  try {
    const response = await fetch('/api/linkedin');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch LinkedIn posts:", error);
    return []; // Return empty array as fallback
  }
};