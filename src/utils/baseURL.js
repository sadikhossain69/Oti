import axios from "axios";

const baseURL = axios.create({
    baseURL: "https://backend.dplgroupbd.com/api/v1"
})

export default baseURL;