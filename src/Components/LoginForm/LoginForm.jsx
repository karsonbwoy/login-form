import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberLogin, setRememberLogin] = useState(false)


    function handleSubmit(e) {
        e.preventDefault();
        console.log("User: " + username + " Password: " + password + " Remember? " + rememberLogin)
    }

    return (
        <div className="wrapper">
            <form action="/" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label htmlFor=""><input type="checkbox" onChange={(e) => setRememberLogin(e.target.value)} />Remember me</label>
                    <Link to="/forgot">Forgot password?</Link>
                </div>

                <button type="submit">Login</button>


                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm