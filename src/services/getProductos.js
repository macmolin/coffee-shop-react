import { baseURL } from "../constants/baseURL.js";
import axios from 'axios';

export const getProductos = async () => {
    try {
        const respuesta = await axios.get(baseURL+'products')
        return respuesta.data
    } catch (error) {
        return error
    }
        
} 