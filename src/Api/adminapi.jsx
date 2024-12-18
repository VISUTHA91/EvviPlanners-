import axios from "axios";

// Base URL for your API
export const API_BASE_URL = "http://192.168.20.5:4002/";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

    //Admin Login

  export const Login = async (Data) => {
    try {
      const response = await axiosInstance.post(`${API_BASE_URL}login`, Data);
      console.log(response);
      return response.data; // Return the response data (e.g., user details)
    } catch (error) {
      return error.response ? error.response.data : new Error("Login In Failed");
    }
  }