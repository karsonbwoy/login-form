import React, { useState } from "react";
import './RegisterForm.css';
import { FaUser, FaLock, FaHandLizard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function checkPasswords(psswrd) {
        return psswrd === password
    }

    return (
        <div className="wrapper">
            <form action="">
                <h1>Create an acccount</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Repeat password" required onChange={(e) => checkPasswords(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="policies">
                    <label htmlFor="policies-checkbox"><input type="checkbox" id="policies-checkbox" />I've read and consent <a href="#">policies</a></label>
                </div>

                <button type="submit">Register</button>


                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm