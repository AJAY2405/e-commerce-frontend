// src/axiosConfig.js or similar
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://ecommerce-backend-yasd.onrender.com',
  withCredentials: true,
});

axiosApi.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosApi;
