import React from 'react';
import { InputCSS,ButtonCSS } from './styled.jsx';
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from '../../routes/coordinator.jsx';

export const LoginUser = () => {
    const navigate = useNavigate();

    const {formValues, onChange, cleanFields} = useForm({
        name: ""})

    const SubmitForm = (event) => {
        event.preventDefault();
        cleanFields()
        alert("Formulario Enviado");
        goToHomePage(navigate)
    }
    return (
        <form onSubmit={SubmitForm}>
            <InputCSS> 
                <input
                type={"text"}
                placeholder="Nome"
                name="name"
                onChange={onChange}
                required
                value={formValues.name}
                ></input>
            </InputCSS>
            <ButtonCSS> 
                <button> Entrar </button> 
            </ButtonCSS> 
        </form> 
    )
}