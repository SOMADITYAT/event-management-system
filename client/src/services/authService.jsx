import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; 

export const register = async (username, email, password) => {
  try {
    await axios.post(`${API_URL}/register`, { username, email, password });
  } catch (error) {
    throw error.response.data.message;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.token;
  } catch (error) {
    throw error.response.data.message;
  }
};
