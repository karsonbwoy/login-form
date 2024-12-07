import React, { useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";



const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="wrapper">
            <form action="">
                <h1>Home</h1>
                {
                    loggedIn ?
                        "User content placeholder"
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