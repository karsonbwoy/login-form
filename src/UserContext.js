import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem("userId"));
    const [token, setToken] = useState(localStorage.getItem("token"))
    useEffect(() => {
        fetch('http://localhost:5000/api/auth/auth', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => console.log(data.message));

    }, [token])

    const login = (userData) => {
        setUser(userData.userId);
        localStorage.setItem("userId", userData.userId)
        localStorage.setItem("token", userData.token)
    }

    const logout = () => {
        setUser(null)
        localStorage.clear()
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext