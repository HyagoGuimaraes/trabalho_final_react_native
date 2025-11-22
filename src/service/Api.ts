import axios from "axios";

export const baseUrl = "https://68dda582d7b591b4b78d02ee.mockapi.io/Native";

export const Api = axios.create({
    baseURL: baseUrl
})
