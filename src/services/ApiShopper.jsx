import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL.js';

export const getProducts = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/user/products`)
            return response.data
        } catch(error){
            console.log(error.response)
        }
};