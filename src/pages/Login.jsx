/* eslint-disable no-unused-vars */
import React from 'react';


import { Stack, Button, Container, Text } from '@chakra-ui/react';
import { InputControl } from 'formik-chakra-ui';
import { Form, Formik } from "formik";

import { validationSchema } from '../schemas/Validation';

import { useMutation } from 'react-query';
import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from '../service/Auth';
import AuthCallbackLogin from '../hooks/AuthCallbackLogin';


const Login = () => {
    const { isLoading, mutateAsync } = useMutation(
        "login",
        loginUser,
        AuthCallbackLogin()
    )

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
                            Log in 
                        </Button>
                        <Text color="blue.500">
                            <Link to="/register">Create account</Link>
                        </Text>
                    </Form>
                </Formik>
    </Stack>
        </Container>
    )
}

export default Login;

/*

check if the values exist 1st

<Formik initialValues={{ email: "", password: ""}} onSubmit={(values) => {
            console.log(values)
        }}>
            <Form>
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <Button type="submit"> login </Button>
            </Form>
        </Formik>
*******************************************************
1st

const { isLoading, error, isError, mutateAsync, data } = useMutation("login", loginUser);
    
    console.log("data", data);
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
                        <Button colorScheme="blue" mt="4" type="submit">Log in</Button>
                    </Form>
                </Formik>
    </Stack>
        </Container>
    )
}

*****************

after implementing the contextAPI remove the data
const { isLoading, error, isError, mutateAsync, data } = useMutation

******************************************

console.log 1st to see if the data exists
const { isLoading, error, isError, mutateAsync } = useMutation(
        "login", 
        loginUser,
        {
            onSuccess: (data) => {
                console.log(data)
                dispatch({ type: actionTypes.SET_TOKEN, value: data.token })
            }
        }
        );
    
    if (isError) {
        toast({ title: error.message, status: "error" });
    }

    then
    const [{}, dispatch] = useAuthValue()

    {
            onSuccess: (data) => {
                dispatch({ type: actionTypes.SET_TOKEN, value: data.token })
            }
        }
*/