import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user"));

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", userData)
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