import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [userNotes, setUserNotes] = useState(localStorage.getItem('userNotes').split(',') || [])
    const [token] = useState(localStorage.getItem("token"))

    useEffect(() => {
        if (token) {
            fetch('http://localhost:5000/api/auth/auth', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => {
                    if (res.status === 403) {
                        console.log(res.status);
                        setUserId(null)
                        localStorage.clear()
                    }

                    return res.json()
                })
                .then(data => {
                    console.log(data.message)
                })
                .catch(error => console.log(error));
        }
    }, [token])

    const login = (userData) => {
        setUserId(userData.userId);
        setUserName(userData.userName)
        localStorage.setItem("userId", userData.userId)
        localStorage.setItem("userName", userData.userName)
        localStorage.setItem("token", userData.token)
    }

    const logout = () => {
        setUserId(null)
        setUserName(null)
        localStorage.clear()
    }

    return (
        <UserContext.Provider value={{ userId, userName, userNotes, setUserNotes, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext