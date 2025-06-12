import axios from "axios";



// const BASE_URL = `http://localhost:3000/api/v1/edgefund`;
const BASE_URL = `https://edge-capital-backend.onrender.com/api/v1/edgefund`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // Timeout after 10s
//   withCredentials: true, // Optional: for cookie-based sessions : This will cause a cors error if the cors origin is "*" on the backend it has to be specific. 
});




export default axiosInstance;
