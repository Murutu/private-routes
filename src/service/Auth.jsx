/* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/"
});


export const loginUser = async ({email, password}) => {
    try {     
        const { data } = await api.post("/api/login",{ email, password })
        return data;
    } catch (error) {
        throw Error(error.response.data.message)
    }
}

export const registerUser = async ({email, password}) => {
    try {
        const { data } = await api.post("/api/register", {email, password});
        return data;
    } catch (error) {
        throw Error(error.response.data.message);
    }
};


/*
export const loginUser = async ({email, password}) => {
    try {     
        const { data } = await api.post("/api/login",{ email, password })
        return data;
    } catch (error) {
        throw Error(error.response.data.message)
    }
}

const api = axios.create({})
*/
