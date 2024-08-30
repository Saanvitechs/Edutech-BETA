// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/auth/';

// const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');
//   return axios.create({
//     baseURL: API_URL,
//     headers: {
//       Authorization: token, 
//     },
//   });
// };




// const register = async (formData) => {
//   try {
//     // Construct headers for multipart/form-data
    
//     const headers = {
//       'Content-Type': 'multipart/form-data',
//     };

//     // Send the request to the backend with formData
//     const response = await axios.post(API_URL + 'signup', formData, { headers });
//     return response.data;
//   } catch (error) {
//     // Handle errors
//     console.error('Registration failed:', error.response?.data || error.message);
//     throw error;
//   }
// };

// const login = async (usernameOrEmail, password) => {
//   try {
//     const response = await axios.post(API_URL + 'login', {
//       usernameOrEmail,
//       password,
//     });

//     // Handle token extraction correctly
//     const token = response.data?.accessToken?.split(' ')[1];
//     if (token) {
//       localStorage.setItem('token', token);  // Store the token in localStorage
//       return response.data;
//     } else {
//       throw new Error('Login failed: No token received');
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//     throw error;
//   }
// };

// const logout = () => {
//   localStorage.removeItem('token');
// };

// const getCurrentUser = () => {
//   return localStorage.getItem('token');
// };

// const fetchProtectedData = async () => {
//   try {
//     const response = await axiosWithAuth().get('/protected-route');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching protected data:', error);
//     throw error;
//   }
// };

// const requestOtp = async (emailOrPhone) => {
//   try {
//     const response = await axios.post(API_URL + 'forgot-password', { email: emailOrPhone });
//     return response.data;
//   } catch (error) {
//     console.error('Error requesting OTP:', error.response?.data || error.message);
//     throw error;
//   }
// };

// const verifyOtp = async (email, otp, newPassword) => {
//   try {
//     const response = await axios.post(API_URL + 'reset-password', { email, otp, newPassword });
//     return response.data;
//   } catch (error) {
//     console.error('Error verifying OTP:', error.response?.data || error.message);
//     throw error;
//   }
// };

// const updatePassword = async (username, newPassword) => {
//   try {
//     const response = await axiosWithAuth().put(API_URL + 'update-password', { username, newPassword });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating password:', error.response?.data || error.message);
//     throw error;
//   }
// };
// const getProfile = async () => {
//   try {
//     const response = await axiosWithAuth().get('/profile');  // Adjust endpoint if needed
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching profile:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// const getProjectAndAssignmentDetails = async () => {
//   try {
//     const response = await axiosWithAuth().get(API_URL + 'project');  // Your single endpoint for both project and assignment details
//     return response.data; // JSON data is automatically parsed by axios
//   } catch (error) {
//     console.error('Error fetching project and assignment details:', error.response?.data || error.message);
//     throw error;
//   }
// };


// const authService = {
//   register,
//   login,
//   logout,
//   getCurrentUser,
//   fetchProtectedData,
//   requestOtp,
//   verifyOtp,
//   updatePassword,
//   getProfile,
//   getProjectAndAssignmentDetails,
// };

// export default authService;


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token, // Ensure 'Bearer ' prefix is added to the token
    },
  });
};

const register = async (formData) => {
  try {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const response = await axios.post(API_URL + 'signup', formData, { headers });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;
  }
};

const login = async (usernameOrEmail, password) => {
  try {
    const response = await axios.post(API_URL + 'login', {
      usernameOrEmail,
      password,
    });

    const token = response.data?.accessToken?.split(' ')[1];
    if (token) {
      localStorage.setItem('token', token);  // Store the token in localStorage
      return response.data;
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
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

const requestOtp = async (emailOrPhone) => {
  try {
    const response = await axios.post(API_URL + 'forgot-password', { email: emailOrPhone });
    return response.data;
  } catch (error) {
    console.error('Error requesting OTP:', error.response?.data || error.message);
    throw error;
  }
};

const verifyOtp = async (email, otp, newPassword) => {
  try {
    const response = await axios.post(API_URL + 'reset-password', { email, otp, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error.response?.data || error.message);
    throw error;
  }
};

const updatePassword = async (username, newPassword) => {
  try {
    const response = await axiosWithAuth().put(API_URL + 'update-password', { username, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error.response?.data || error.message);
    throw error;
  }
};

// const API_URL = 'http://localhost:8080/api/auth/';

const getProjectAndAssignmentDetails = async () => {
  try {
    const response = await axiosWithAuth().get(`${API_URL}project`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project and assignment details:', error.response?.data || error.message);
    throw error;
  }
};
const getProfile = async () => {
  try {
    const response = await axiosWithAuth().get('/profile');  // Adjust endpoint if needed
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  fetchProtectedData,
  requestOtp,
  verifyOtp,
  updatePassword,
  getProjectAndAssignmentDetails,
  getProfile,  // Use this method to fetch project and assignment details
};


export default authService;

