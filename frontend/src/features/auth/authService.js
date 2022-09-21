import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/user";

// REGISTER A USER
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  }
};

// LOGIN A USER
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  }
};

// LOGOUT USER
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
