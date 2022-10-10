import React from 'react';
import { HeaderButtonCartCss,QuantityCartCss,MenuCartCss,ArrowCss, FinaliteBuy} from './styled.jsx';
import { useState } from 'react';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiShoppingCart } from "react-icons/ti";

export const HeaderButtonCart = () => {

const [menuCart, setMenuCartTrue] = useState(false)
const { cartSum } = useContext(GlobalContext)


const MenuCart = () => {
    if(menuCart === false){
        setMenuCartTrue(true)
    }
    else{
        setMenuCartTrue(false)
    }
}
    return (
        <>
            <HeaderButtonCartCss onClick={() => MenuCart()} > <QuantityCartCss> {cartSum} </QuantityCartCss><TiShoppingCart/> </HeaderButtonCartCss>
            <MenuCartCss variant={ menuCart == true}> 
            <ArrowCss variant={ menuCart == true}/> 
            <h1> Teste </h1>
            <h1> Teste </h1>
            <h1> Teste </h1>
            <h1> Teste </h1>
            <h1> Teste </h1>
            <FinaliteBuy variant={ menuCart == true}> FINALIZAR COMPRA </FinaliteBuy> 
            </MenuCartCss>
        </>
        )
}