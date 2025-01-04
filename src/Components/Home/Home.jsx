import React, { useState, useContext } from "react";
import './Home.css';
import Notes from "../Notes/Notes";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";



const Home = () => {
    const { userId, userName, logout } = useContext(UserContext)
    return (
        <div className="wrapper">
            <h1>Home</h1>
            {
                userId ?
                    (<>
                        <p>
                            Hello {userName}
                        </p>
                        <button onClick={logout}>Logout</button>
                        <Notes />
                    </>)

                    :
                    (<>
                        <h2>
                            You are not logged in
                        </h2>
                        <Link to="/login">Login</Link>
                    </>)
            }
        </div>
    )
}

export default Home