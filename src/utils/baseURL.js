import axios from "axios";

const baseURL = axios.create({
    baseURL: "http://localhost:8000/api/v1"
})

export default baseURL;