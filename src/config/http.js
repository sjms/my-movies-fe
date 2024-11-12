import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const QUERY_TOKEN = 'TEST';

export const moviesApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer ' + QUERY_TOKEN
        , Accept: 'application/json'
    }
})