import React, { useState } from "react";
import './RegisterForm.css';
import { FaUser, FaLock, FaHandLizard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState(true);
    const [error, setError] = useState("")

    const validateUsername = username.length > 3
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

        setValidation(length && uppercase && lowercase && number && specialChar);
        return length && uppercase && lowercase && number && specialChar
    };
    const checkPasswords = password === confirmPassword

    function handleSubmit(e) {
        if (!validateUsername) {
            console.log("Too short username");
            setError("Too short username!")
            e.preventDefault();
            return;
        }

        if (!validateEmail()) {
            console.log("Wrong Email");
            setError("Wrong Email!")
            e.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            console.log("Wrong complexity");
            setError("Check complexity of your password")
            e.preventDefault();
            return;
        }
        if (!checkPasswords) {
            console.log("Check password");
            setError("Passwords are not the same")
            e.preventDefault();
            return;
        }
        setError("")

    }


    return (
        <div className="wrapper">
            <form action="">
                <h1>Create an acccount</h1>
                {!validation && <p className="error-message">{error}</p>}
                <div className="input-box">
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" className={validation ? "" : "red-box"} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" className={checkPasswords ? "" : "red-box"} placeholder="Confirm password" required onChange={(e) => setConfirmPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="policies">
                    <label htmlFor="policies-checkbox"><input type="checkbox" required id="policies-checkbox" />I've read and consent <a href="#">policies</a></label>
                </div>

                <button type="submit" onClick={handleSubmit}>Register</button>


                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm