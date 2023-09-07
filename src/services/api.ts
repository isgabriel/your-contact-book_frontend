import axios from "axios";

const api = axios.create({
    baseURL: "https://your-contact-book.up.railway.app",
    timeout: 15000,
});

export { api };
