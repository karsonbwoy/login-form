import React, { useState, useContext } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";



const Home = () => {
    const { user, logout } = useContext(UserContext)
    return (
        <div className="wrapper">
            <form action="">
                <h1>Home</h1>
                {
                    user ?
                        <>
                            <p>
                                `Hello {user}`
                            </p>
                            <button onClick={logout}>Logout</button>
                        </>

                        :
                        (<>
                            <h2>
                                Yer not logged in
                            </h2>
                            <Link to="/login">Login</Link>
                        </>)
                }
            </form>
        </div>
    )
}

export default Home