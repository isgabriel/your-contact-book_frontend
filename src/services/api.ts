import axios from "axios";

const api = axios.create({
    // baseURL: "https://your-school-deploy-render.onrender.com",
    baseURL: "http://localhost:3000",
    timeout: 15000,
});

export { api };
