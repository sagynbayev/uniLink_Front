import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    const login = () => {
        setCurrentUser({
            id:1,
            name: "Vasya Pupkin",
            profilePic: "https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg"
        })
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
}