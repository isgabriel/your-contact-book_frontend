import axios from "axios";

const api = axios.create({
    baseURL: "https://your-school-deploy-render.onrender.com",
    timeout: 15000,
});

export { api };
