import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1> Erro Page </h1>
        <button onClick={() => goToLogin(navigate)}> goToLogin </button>
        </>
    )
}
export default ErrorPage;