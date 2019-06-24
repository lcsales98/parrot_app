import axios from "axios";

const api = axios.create({
    baseURL: "http://172.18.35.65:3000/"
});

export default api;
