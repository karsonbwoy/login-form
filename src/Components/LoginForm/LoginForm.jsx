import React, { use, useState, useContext, useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberLogin, setRememberLogin] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const data = {
        username,
        password,
    }
    const { user, login } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                let fetchedData = await response.json()
                if (response.status === 200) {
                    login(fetchedData)
                    navigate("/");


                }
                return fetchedData
            })
            .then((data) => setError(data.message))
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="wrapper">
            <form action="/" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className="error-message">{error}</p>}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            onChange={(e) => setRememberLogin(e.target.value)}
                        />
                        Remember me
                    </label>
                    <Link to="/forgot">Forgot password?</Link>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
