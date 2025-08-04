// API configuration and helper functions
export const API_CONFIG = {
  GITHUB_BASE_URL: 'https://api.github.com',
  DEFAULT_PER_PAGE: 6
};

export const fetchGitHubUser = async (username) => {
  const response = await fetch(`${API_CONFIG.GITHUB_BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

export const fetchGitHubRepos = async (username, perPage = API_CONFIG.DEFAULT_PER_PAGE) => {
  const response = await fetch(`${API_CONFIG.GITHUB_BASE_URL}/users/${username}/repos?sort=updated&per_page=${perPage}`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};