import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Auth.css';
import { Checkbox, message } from 'antd';
import { register } from '../services/Api';

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.terms) {
            message.warning("Please read our Terms and Privacy Policy");
            return;
        }
        await register(formData).then((res) => {
            message.success(res.data);
            navigate("/dressify/auth/login")
        }).catch((error) => console.log(error));
    }

    const handleEventChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handlePaste = (e) => {
        e.preventDefault();
        message.error('Pasting password is not allowed.');
    };

    return (
        <div className="form__container">
            <form className='login__form' onSubmit={handleSubmit}>
                <div className='form__field'>
                    <h2 className='heading'>REGISTER FORM</h2>
                    <div className='input__field'>
                        <label className='input__label' htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Enter your name' onChange={handleEventChange} required />
                    </div>
                    <div className='input__field'>
                        <label className='input__label' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter your email' onChange={handleEventChange} required />
                    </div>
                    <div className='input__field'>
                        <label className='input__label' htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Enter your password' onChange={handleEventChange} onPaste={handlePaste} minLength={8} maxLength={15} required />
                    </div>
                    <div className='input__field'>
                        <label className='input__label' htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder='Retype your password' onChange={handleEventChange} onPaste={handlePaste} required />
                    </div>
                    <Checkbox className='checkbox' name='terms' onChange={handleEventChange}>
                        I accept the <Link to='/dressify/termsOfUse' style={{ color: '#ae3c33' }}>Terms of Use</Link> & <Link style={{ color: '#ae3c33' }} to='/dressify/privacyPolicy'>Privacy Policy</Link>
                    </Checkbox>
                    <button className='login__btn' type="submit"><span>REGISTER</span></button>
                    <p className='login__user'>Existing user? <Link className='login__user__link' to="/dressify/auth/login">Login here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register;