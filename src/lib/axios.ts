import axiosClient from "axios";

const axios = axiosClient.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10 * 60 * 60 * 1000,
  params: {
    apikey: import.meta.env.VITE_API_KEY,
  },
});

export default axios;
