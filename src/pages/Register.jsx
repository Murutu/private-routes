// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Form , Formik } from "formik";
import { InputControl } from 'formik-chakra-ui';
import { useToast } from '@chakra-ui/toast';
import { Button, Container, Stack, Text } from '@chakra-ui/react';
import { validationSchema } from '../schemas/Validation';

import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../service/Auth';
import { useAuthValue } from '../context/Auth/AuthWrapper';
import { actionTypes } from '../context/Auth/AuthReducer';
import { useCookies } from 'react-cookie';



const Register = () => {
    const [{}, dispatch] = useAuthValue();
    const [, setCookie] = useCookies(["jwt"]);
    const navigate = useNavigate();

    const toast = useToast();


    const { isLoading, error, isError, mutateAsync } = useMutation(
        "register", 
        registerUser,
        {
            onSuccess: (data) => {
                dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
                toast({ 
                    title: "Registered account",
                    description: "Successfully registered account",
                    duration: 5000,
                    isClosable: true,
                    status: "success",
                    position: "top"
                })
                setCookie("jwt", data.token);
                navigate("/");
            } 
        }
        );
    

    return (
        <Container
        display="flex"
        height="100vh"
        justifyContent="center"
        alignItems="center"
    >
        <Stack width="300px" p="4" boxShadow="xl" borderRadius="xl">
            <Formik 
                initialValues={{ email: "", password: ""}} 
                onSubmit={async (values) => {
                    await mutateAsync({
                        email: values.email,
                        password: values.password
                    })
                }}
                validationSchema={validationSchema}
            >
                <Form>
                    <InputControl 
                        name="email"
                        label="Email:"
                        inputProps={{
                            type: "email",
                            placeholder: "peter@gmail.com"
                        }}
                    />
                    <InputControl
                        name="password"
                        label="Password:"
                        inputProps={{
                            type: "password",
                            placeholder: "***"
                        }}
                    />
                    <Button 
                        isLoading={isLoading}
                        colorScheme="blue" 
                        mt="4" 
                        type="submit"
                        >
                        Register
                        </Button>
                    <Text mt={3}>
                        Already have an account ? 
                    </Text>
                    <Text color="blue.500">
                        <Link to="/login">Login</Link>
                    </Text>
                </Form>
            </Formik>
</Stack>
    </Container>
    )
}

export default Register

/*
React Query => Is a data fetching library that helps with fetching, caching, synchronising
and updating the server state in your react application. 

It is essential to understand the server state.

<Form
    initialValues={{
        name: "",
        email: "",
        password: ""
    }}
    onSubmit={async ( values) => {
        await mutateAsync({
            name: values.name,
            email: values.email,
            password: values.password
        })
    }}
    ></Form>
*/