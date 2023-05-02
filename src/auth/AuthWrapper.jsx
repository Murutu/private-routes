import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../structure";
import { RenderMenu, RenderRoutes } from "../structure/RenderNavigation";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        email: "",
        password: "",
        
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        axios.post("https://reqres.in/api/login", {
            email: details.email,
            password: details.password
        })
        .then(res => {
            localStorage.setItem("token", res.data.token)
            navigate("/");
        })
        .catch(err => console.error(err))
        
    }

    const logout = () => {
        setDetails({});
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{details, handleSubmit, logout}}>
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