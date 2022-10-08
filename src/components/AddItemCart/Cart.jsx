import React from 'react';
import { CartCss, ContainerCss, NameCss, PriceCss, StockCss,ButtonAddCart } from './styled.jsx';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiPlus } from "react-icons/ti";

export const Cart = () => {
    const { products } = useContext(GlobalContext)
    return (
        <ContainerCss>            

        </ContainerCss> 
    )
}