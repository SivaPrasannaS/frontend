import React, { useState } from 'react';
import '../../assets/css/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/Api';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUserData, clearUserData } from '../redux-store/slices/userSlice';
import { setToken } from '../cookie/Cookie';
import { message } from 'antd';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData)
            .then((res) => {
                const token = res.data.data.token;
                const userData = jwtDecode(token);
                setToken(token);
                dispatch(setUserData(userData.user));
                message.success(res.data.message);
                navigate("/dressify/dashboard");
            })
            .catch((error) => {
                if (error.request && (error.request.status === 401 || error.request.status === 404)) {
                    message.error(error.response.data.message);
                    dispatch(clearUserData());
                }
            });
    };

    const handleEventChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePaste = (e) => {
        e.preventDefault();
        message.error('Pasting password is not allowed.');
    };

    return (
        <div className="form__container">
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="form__field">
                    <h2 className="heading">LOGIN FORM</h2>
                    <div className="input__field">
                        <label className="input__label" htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" onChange={handleEventChange} required />
                    </div>
                    <div className="input__field">
                        <label className="input__label" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleEventChange} onPaste={handlePaste} minLength={8} maxLength={15} required />
                    </div>
                    <p className="forgot__pwd">Forgot password? <Link className="forgot__pwd__link" to="/forgot-password">Click here</Link></p>
                    <button className="login__btn" type="submit"><span>LOGIN</span></button>
                    <p className="new__user">New user? <Link className="new__user__link" to="/dressify/auth/register">Register here</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;