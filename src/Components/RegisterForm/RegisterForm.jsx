import React, { useState } from "react";
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    // Validation Functions
    const validateUsername = (username) => username.length > 3;

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const length = password.length >= 8;
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[@$!%*?&]/.test(password);
        return length && uppercase && lowercase && number && specialChar;
    };

    const passwordsMatch = formData.password === formData.confirmPassword;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!validateUsername(formData.username)) {
            errors.username = "Username must be at least 4 characters long.";
        }

        if (!validateEmail(formData.email)) {
            errors.email = "Invalid email format.";
        }

        if (!validatePassword(formData.password)) {
            errors.password = "Password must be at least 8 characters, including uppercase, lowercase, number, and special character.";
        }

        if (!passwordsMatch) {
            errors.confirmPassword = "Passwords do not match.";
        }

        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Submit the form
            navigate("/success");
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>

                {Object.values(validationErrors).map((error, index) => (
                    <p key={index} className="error-message">{error}</p>
                ))}

                <div className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className={validationErrors.username ? "red-box" : ""}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={validationErrors.email ? "red-box" : ""}
                        required
                    />
                    <MdEmail className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={validationErrors.password ? "red-box" : ""}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={validationErrors.confirmPassword ? "red-box" : ""}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="policies">
                    <label>
                        <input type="checkbox" required /> I've read and consent to the <a href="#">policies</a>
                    </label>
                </div>

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
