import React, { useState, useContext } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";



const Home = () => {
    const { userId, userName, logout } = useContext(UserContext)
    return (
        <div className="wrapper">
            <form action="">
                <h1>Home</h1>
                {
                    userId ?
                        <>
                            <p>
                                Hello {userName}
                            </p>

                            <button onClick={logout}>Logout</button>
                        </>

                        :
                        (<>
                            <h2>
                                You are not logged in
                            </h2>
                            <Link to="/login">Login</Link>
                        </>)
                }
            </form>
        </div>
    )
}

export default Home