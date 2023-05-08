/* eslint-disable no-unused-vars */
import React from 'react';
import { useCookies } from 'react-cookie';
import { useAuthValue } from '../context/Auth/AuthWrapper';
import { actionTypes } from '../context/Auth/AuthReducer';
import { useNavigate } from 'react-router-dom';


import { Box, Button } from '@chakra-ui/react';


const Home = () => {
    const [,, removeCookie] = useCookies(["jwt"]);
    const [ ,dispatch] = useAuthValue();
    const navigate = useNavigate();

    const logout = () => {
        removeCookie("jwt");
        dispatch({ type: actionTypes.SET_TOKEN, value: null});
        navigate("/login");
    }
    return (
    <Box>
        <Button onClick={logout}> Log out </Button>
    </Box>
    )
}

export default Home