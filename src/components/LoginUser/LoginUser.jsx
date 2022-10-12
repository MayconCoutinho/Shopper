import React from 'react';
import { InputCSS,ButtonCSS,DateCSS, WelcomeMessageCSS,ImgCSS} from './styled.jsx';
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from '../../routes/coordinator.jsx';
import { getUser, postUser} from "../../services/ApiShopper.jsx";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"

export const LoginUser = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(GlobalContext)
    const {formValues, onChange, cleanFields} = useForm({
        name: "",
        delivery_date:""
    })
    const AddIdUser = () => {
        const result = getUser(formValues.name)
        result.then((response) => setUser(response[0].id))
    }
    const SubmitForm = (event) => {
        event.preventDefault()
        postUser(formValues.name,formValues.delivery_date)
        AddIdUser()
        cleanFields()
        alert("Formulario Enviado")
        goToHomePage(navigate)
    }
    return (
        <> 
            <ImgCSS>
                <img src='https://programada.shopper.com.br/static/img/apple-icon.png' width={100}></img> 
            </ImgCSS> 
            <WelcomeMessageCSS> Seja bem vindo a Shopper </WelcomeMessageCSS> 
            <form onSubmit={SubmitForm}>
                <InputCSS> 
                    <input
                    type={"text"}
                    placeholder="Nome"
                    name="name"
                    onChange={onChange}
                    required
                    ></input>
                </InputCSS>
                <DateCSS> 
                <input
                type={"date"}
                name="delivery_date"
                placeholder="Data de entrega"
                required
                onChange={onChange}
            />
            </DateCSS>
                <ButtonCSS> 
                    <button> Entrar </button> 
                </ButtonCSS> 
            </form> 
        </>
    )
}