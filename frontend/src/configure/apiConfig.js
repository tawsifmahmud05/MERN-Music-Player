import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mern-music-player-blond.vercel.app/api",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default axiosInstance;