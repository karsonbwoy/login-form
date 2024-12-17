import React, { useState } from "react";
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const user = {
        username,
        email,
        password,
    };

    const validateUsername = username.length > 3;
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (p) => {
        const length = p.length >= 8;
        const uppercase = /[A-Z]/.test(p);
        const lowercase = /[a-z]/.test(p);
        const number = /[0-9]/.test(p);
        const specialChar = /[@$!%*?&]/.test(p);
        return length && uppercase && lowercase && number && specialChar;
    };
    const checkPasswords = password === confirmPassword;

    function handleSubmit(e) {
        setError("");
        setUsernameIsValid(true);
        setEmailIsValid(true);
        setPasswordIsValid(true);
        e.preventDefault();
        if (!validateUsername) {
            setUsernameIsValid(false);
            console.log("Too short username");
            setError("Invalid username!");
            e.preventDefault();
            return;
        }

        if (!validateEmail()) {
            setEmailIsValid(false);
            console.log("Wrong Email");
            setError("Invalid Email!");
            e.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            setPasswordIsValid(false);
            console.log("Wrong complexity");
            setError("Check complexity of your password");
            e.preventDefault();
            return;
        }

        if (!checkPasswords) {
            console.log("Check password");
            setError("Passwords are not the same");
            e.preventDefault();
            return;
        }
        fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.status === 201) {
                    navigate("/success");
                }
                return response.json();
            })
            .then((data) => setError(data.message))
            .catch(error => { setError('Server error') });
    }

    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>Create an acccount</h1>
                <p className="error-message">{error}</p>
                <div className="input-box">
                    <input
                        type="text"
                        className={usernameIsValid ? "" : "red-box"}
                        placeholder="Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        className={emailIsValid ? "" : "red-box"}
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        className={passwordIsValid ? "" : "red-box"}
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        className={checkPasswords ? "" : "red-box"}
                        placeholder="Confirm password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="policies">
                    <label htmlFor="policies-checkbox">
                        <input type="checkbox" required id="policies-checkbox" />
                        I've read and consent to the <a href="/">policies</a>
                    </label>
                </div>

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
