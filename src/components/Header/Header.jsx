import React from 'react';
import { HeaderStyled} from './styled.jsx';
import { useState } from 'react';
import icon from '../../assets/shopper-icon.png'

export const Header = () => {

const [menuMobile, setMenuMobileTrue] = useState(false)

const MenuMobileFuncao = () => {

    if(menuMobile === false){
        setMenuMobileTrue(true)
    }
    else{
        setMenuMobileTrue(false)
    }
}
    return (
        <HeaderStyled>
            <img src={icon} height={100}/>
            <button> Teste </button>
        </HeaderStyled>
    )
}