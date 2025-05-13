import axios, { AxiosInstance } from "axios";

const TOKEN = import.meta.env.VITE_API_KEY;

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: "https://api.themoviedb.org/3",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
        });
    }
}
const http = new Http().instance;
export default http;
