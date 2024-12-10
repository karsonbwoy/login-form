import React, { useState } from "react";
import "./ForgotPassword.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="wrapper">
      <h1>Memmory issues?</h1>
      <form action="">
        <div className="input-box">
          <input
            type="text"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <MdEmail className="icon" />
        </div>

        <div className="input-box">
          <input
            type="text"
            value={username}
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <button type="submit">Send Email</button>

        <div className="back-to-login">
          <p>
            Back to <Link to="/login">login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
