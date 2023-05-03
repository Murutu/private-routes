import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthReducer from "./AuthReducer";
import axios from "axios";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const initialState = {
        email: "",
        password: "",
        showPassword: false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        axios.post("https://reqres.in/api/login", {
            email: state.email,
            password: state.password
        })
        .then(res => {
            localStorage.setItem("token", res.data.token)
            navigate("/");
        })
        .catch(err => console.error(err))
        
    }

    const logout = () => {
        dispatch({
            type: "LOG_OUT",
            payload: {}
        });
        navigate("/login")
    }

    const handlePassVisibility = () => {
        dispatch({
            type: "HANDLE_VISIBLITY",
            payload:{ 
                showPassword: !state.showPassword
            }
        })
    }
    
    return (
        <AuthContext.Provider value={{details: state.details, handleSubmit, handlePassVisibility, logout, dispatch}}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;

/*
Inside this function we will create a stateful item that will hold the details of our user
export const AuthWrapper = () => {}
value={{details, login, logout}} => here we export our initialState and functions

<RenderHeader />
<RenderMenu />
<RenderRoutes />


const [details, setDetails] = useState({
        email: "",
        password: "",
        showPassword: false
    })
*/