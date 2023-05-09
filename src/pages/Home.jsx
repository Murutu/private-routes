/* eslint-disable no-unused-vars */
import React from 'react';
import { useCookies } from 'react-cookie';
import { useAuthValue } from '../context/Auth/AuthWrapper';
import { actionTypes } from '../context/Auth/AuthReducer';
import { useNavigate } from 'react-router-dom';


import { Box, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';


const Home = () => {
    const [,, removeCookie] = useCookies(["jwt"]);
    const [ ,dispatch] = useAuthValue();
    const navigate = useNavigate();

    const toast = useToast();

    const showToastLoggedOut = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top"
        })
        removeCookie("jwt");
        dispatch({ type: actionTypes.SET_TOKEN, value: null});
        navigate("/login");
    }
    return (
    <Box>
        <Button onClick={showToastLoggedOut}> Log out </Button>
    </Box>
    )
}

export default Home