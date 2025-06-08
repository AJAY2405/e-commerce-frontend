// src/axiosConfig.js or similar
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://your-backend-url.com',
  withCredentials: true,
});

export default axiosApi;
