// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Form , Formik } from "formik";
import { InputControl } from 'formik-chakra-ui';
import { useToast } from '@chakra-ui/toast';
import { Button, Container, Stack } from '@chakra-ui/react';

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../service/Auth';
import { useAuthValue } from '../context/Auth/AuthWrapper';
import { actionTypes } from '../context/Auth/AuthReducer';
import { useCookies } from 'react-cookie';



const Register = () => {
    const { isLoading, error, isError, mutateAsync, data } = useMutation(
        "register", 
        registerUser
    );
    console.log("register", data);
    console.log(error);

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