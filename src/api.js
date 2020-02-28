import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;