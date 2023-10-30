import axios from "axios";
import Cookies from "js-cookie";

const uri = "http://localhost:8181";

const jwtToken = Cookies.get('auth_token');

console.log(jwtToken);

const headers = {
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": 'application/json'
};

// Authentication
export const login = (data) => axios.post(`${uri}/mikey/auth/login`, data);
export const register = (data) => axios.post(`${uri}/mikey/auth/register`, data);

// User
export const getAllUsers = () => axios.get(`${uri}/mikey/user/all`, headers);
