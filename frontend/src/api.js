const API_URL = import.meta.env.VITE_API_URL;

export const fetchProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/profile`);
    if (!response.ok) {
      throw new Error('Failed to fetch profile data');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};

export const fetchProjects = async (skill) => {
  try {
    const query = skill ? `?skill=${skill}` : '';
    const response = await fetch(`${API_URL}/query/projects${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};


export const fetchSearchResults = async (query) => {
  try {
    const response = await fetch(`${API_URL}/query/search?q=${query}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null; 
      }
      throw new Error('Failed to fetch search results');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};