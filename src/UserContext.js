import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();
    const [userNotes, setUserNotes] = useState()
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
                        localStorage.clear()
                    }

                    return res.json()
                })
                .then(data => {
                    const { message, user } = data
                    console.log(message)
                    setUserId(user._id)
                    setUserName(user.username)
                    setUserNotes(user.notes)

                })
                .catch(error => console.log(error));
        }
    }, [token])

    const login = (userData) => {
        setUserId(userData.userId);
        setUserName(userData.userName)
        setUserNotes(userData.userNotes)
        localStorage.setItem("token", userData.token)
    }

    const logout = () => {
        setUserId(null)
        setUserName(null)
        setUserNotes(null)
        localStorage.clear()
    }

    return (
        <UserContext.Provider value={{ userId, userName, userNotes, setUserNotes, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext