import axios from 'axios';
import LocalStorageService from "./localStorageService";

const localStorageService = LocalStorageService.getService();

axios.defaults.baseURL = 'https://albera.softsis.com.tr';
// axios.defaults.baseURL = 'https://localhost:44335';

axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.request.use(
    config => {
        const token = localStorageService.getAccessToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);