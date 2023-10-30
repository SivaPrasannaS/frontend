import Cookies from "js-cookie";

export const setToken = (token) => Cookies.set('auth_token', token, { secure: true, httpOnly: true });

export const removeToken = () => Cookies.remove('auth_token');

export const getToken = () => Cookies.get('auth_token');