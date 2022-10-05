import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL.js';
import { useState } from 'react';

export const getProducts = () => {
    const [product, setProduct] = useState([])
    axios
        .get(`${BASE_URL}/user/products`)
        .then((response) => {
            setProduct(response)
        })
        .catch((err) => {
            console.log(err);
        });
    return product
};


