export const fetchProjects = async () => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};
