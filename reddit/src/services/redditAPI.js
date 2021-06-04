const API_URL = 'https://www.reddit.com/r/';

const redditAPI = async (text) => {
  const response = await fetch(`${API_URL}${text}.json`);
  const data = await response.json();
  return data;
}

export default redditAPI;