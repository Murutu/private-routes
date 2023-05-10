// eslint-disable-next-line no-unused-vars
import React from 'react';

import { useToast } from '@chakra-ui/react';
import { useAuthValue } from '../context/Auth/AuthWrapper';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from '../context/Auth/AuthReducer';
import { useCookies } from 'react-cookie';


const AuthCallbackLogin = () => {
    const [{}, dispatch] = useAuthValue();
    const [, setCookie] = useCookies(["jwt"]);
    const navigate = useNavigate();

    const toast = useToast();

    return {
        onSuccess: (data) => {
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            toast({ 
                title: "Logged in ",
                description: "Successfully logged in",
                duration: 5000,
                isClosable: true,
                status: "success",
                position: "top"
            })
            setCookie("jwt", data.token);
            navigate("/");
        },
        onError: () => {
            toast({ 
                title: "Login failed",
                description: "Wrong details used",
                duration: 5000,
                isClosable: true,
                status: "error",
                position: "top"
            })
        }
    }
} 

export default AuthCallbackLogin;

