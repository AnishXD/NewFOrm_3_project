import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newform-3-project-1.onrender.com/api',  // Ensure the correct base URL
});

export default instance;
