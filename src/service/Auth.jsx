/* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_REQRES,
});

export const login = async({email, password}) => {
    try {
        const { data } = await api.post("/api/login", {email, password});
        return data;
    } catch(error) {
        throw Error(error.response.data.message)
    }
};
