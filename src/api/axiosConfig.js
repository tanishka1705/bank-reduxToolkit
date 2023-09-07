import axios from "axios";

const client = axios.create({
    baseURL : process.env.REACT_APP_CURRENCY_API,
})

export default client;