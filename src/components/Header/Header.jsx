import React from 'react';
import { HeaderCss} from './styled.jsx';
import icon from '../../assets/shopper-icon.png'
import { HeaderButtonCart } from '../HeaderButtonCart/HeaderButtonCart.jsx';

export const Header = () => {
    return (
        <HeaderCss>
            <img src={icon} height={100}/>
            <HeaderButtonCart/> 
        </HeaderCss>
    )
}