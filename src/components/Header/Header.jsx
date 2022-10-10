import React from 'react';
import { HeaderCss, MenuCartCss} from './styled.jsx';
import { useState } from 'react';
import icon from '../../assets/shopper-icon.png'
import { HeaderButtonCart } from '../HeaderButtonCart/HeaderButtonCart.jsx';


export const Header = () => {

const [menuCart, setMenuCartTrue] = useState(false)

const MenuCart = () => {

    if(menuCart === false){
        setMenuCartTrue(true)
    }
    else{
        setMenuCartTrue(false)
    }
}
    return (
        <HeaderCss>
            <img src={icon} height={100}/>
            <HeaderButtonCart/> 
            {/* <MenuCartCss/> */}
        </HeaderCss>
    )
}