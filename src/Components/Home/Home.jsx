import React, { useContext } from "react";
import './Home.css';
import Notes from "../Notes/Notes";
import { Link } from "react-router-dom";
import UserContext, { useUser } from "../../UserContext";
import UserPage from "../UserPage/UserPage";



const Home = () => {
    const { userId } = useUser();
    return (
        <div className="wrapper">
            <h1>Home</h1>
            {
                userId ?
                    (<UserPage />)

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