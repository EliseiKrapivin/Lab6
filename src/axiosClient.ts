import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 10000, // Timeout after 10 seconds
});

export default axiosClient;
