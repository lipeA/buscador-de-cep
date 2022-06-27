import axios from "axios";

// https://viacep.com.br/ws/75387525/json   ==>> api

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"  // url basica
});


export default api;





















