import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token, // Ensure token is passed without adding Bearer if it already has it
    },
  });
};


const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'signup', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'login', {
      username,
      password,
    });

    // Handle token extraction correctly
    const token = response.data?.accessToken?.split(' ')[1];
    if (token) {
      localStorage.setItem('token', token);  // Store the token in localStorage
      return response.data;
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  return localStorage.getItem('token');
};

const fetchProtectedData = async () => {
  try {
    const response = await axiosWithAuth().get('/protected-route');
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  fetchProtectedData,
};

export default authService;
