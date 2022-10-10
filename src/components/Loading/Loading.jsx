import React from 'react';
import { LoadingCSS, ContainerCss} from './styled.jsx';

export const Loading = () => {
    return (
        <ContainerCss> 
            <img src='https://programada.shopper.com.br/static/img/apple-icon.png' width={100}></img> 
            <LoadingCSS/> 
        </ContainerCss> 
    )
}