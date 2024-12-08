import React, { useState } from "react";
import './Success.css';
import { Link } from "react-router-dom";



const Success = () => {
    return (
        <div className="wrapper">
            <h2>
                You've registered successfully!
            </h2>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Success