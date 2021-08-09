import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_URL,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
});


export default apiClient;
