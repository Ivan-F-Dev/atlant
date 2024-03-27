import axios from "axios";

export const API = {
    v1: axios.create({
        baseURL: process.env.REACT_APP_API || 'http://localhost:6000error'
    })
}

