import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5069/api',  // Ensure the correct base URL
});

export default instance;
