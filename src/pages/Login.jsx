/* eslint-disable no-unused-vars */
import React from 'react';
import { Stack, Button, Input, FormControl, FormLabel, Container } from '@chakra-ui/react';
import { InputControl } from 'formik-chakra-ui';
import { Field, Form, Formik} from "formik";
import { useMutation } from 'react-query';
import {loginUser} from '../service/Auth';

const Login = () => {

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
*/