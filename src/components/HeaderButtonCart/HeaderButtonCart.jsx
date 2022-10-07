import React from 'react';
import { HeaderButtonCartCss} from './styled.jsx';
import { useState } from 'react';

export const HeaderButtonCart = () => {

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
        <HeaderButtonCartCss> Carrinho </HeaderButtonCartCss>
    )
}