import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";
import { BackGroundCSS, ImgCSS,MenssageCSS } from "./styled";
import { ButtonCSS } from "../../components/LoginUser/styled";

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <BackGroundCSS>
            <ImgCSS>
                <img src='https://programada.shopper.com.br/static/img/apple-icon.png' width={100}></img> 
            </ImgCSS> 
            <MenssageCSS> 
                Error! Essa pagina não existe. Volte para tela de login. 
            </MenssageCSS>   
            <ButtonCSS> 
                <button onClick={() => goToLogin(navigate)}> Tela de Login </button>
            </ButtonCSS>
        </BackGroundCSS>
    )
}
export default ErrorPage;