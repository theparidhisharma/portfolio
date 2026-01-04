import axios from 'axios';

// Ensure your backend server is running on port 5000
const API_URL = 'http://localhost:5000/api/linkedin';

export const fetchLinkedinPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return [];
  }
};