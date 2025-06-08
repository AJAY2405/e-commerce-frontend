// src/axiosConfig.js or similar
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://ecommerce-backend-yasd.onrender.com',
  withCredentials: true,
});

export default axiosApi;
