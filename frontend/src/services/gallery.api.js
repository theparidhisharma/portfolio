export const fetchGallery = async () => {
  try {
    const response = await fetch('/api/gallery');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch Gallery:", error);
    return [];
  }
};
