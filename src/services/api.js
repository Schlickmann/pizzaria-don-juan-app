import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pizzaria-don-juan-api.herokuapp.com',
});

export default api;
