import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../structure";
import { RenderMenu, RenderRoutes } from "../structure/RenderNavigation";


const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    
    const [details, setDetails] = useState({
        email: "",
        password: "",
        isAuthenticated: false
    })

    const login = (userEmail, password) => {

        return new Promise((resolve, reject) => {
            // Add API
            if(password === "password") {
                setDetails({email: userEmail, isAuthenticated: true})
                resolve("success")
            } else {
                reject("Incorrect password")
            }
        })
    }

    const logout = () => {
        setDetails({email: "", isAuthenticated: false})
    }

    return (
        <AuthContext.Provider value={{details, login, logout}}>
            <RenderHeader />
            <RenderMenu />
            <RenderRoutes />
        </AuthContext.Provider>
    )
}

/*
Inside this function we will create a stateful item that will hold the details of our user
export const AuthWrapper = () => {}
value={{details, login, logout}} => here we export our initialState and functions
*/