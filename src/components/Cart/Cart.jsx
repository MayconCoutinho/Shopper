import React from 'react';
import { CartCss, ContainerCss, NameCss, PriceCss, StockCss,ButtonAddCart } from './styled.jsx';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiPlus } from "react-icons/ti";
import { useForm } from '../../hooks/useForm.js';
import { postUserProducts } from '../../services/ApiShopper.jsx';

export const Cart = () => {
    const { products } = useContext(GlobalContext)
    const { cartItemSum, setCartItemSum, user, setTimesAddedProducts, timesAddedProducts} = useContext(GlobalContext)
    const {formValues, onChange, cleanFields} = useForm([{
        id:"",
        quantity:""
    }])
    const OneItemAdd = (id) => {

        // const teste = formValues.initialState
        
        // const result = teste.map((item) => console.log(item)) 
  
        return true
    }
    const AddProductCart = (idProduct) => {
        postUserProducts(idProduct,user)
        setTimesAddedProducts(timesAddedProducts + 1)
    }
    const SubmitForm = (event) => {
        // event.preventDefault() 
        cleanFields()
        alert("Formulario Enviado")
    }
    return (
        <ContainerCss>            
            {
            products && products.map((item) => {
                return(
                    <CartCss key={item.id}> 
                        <NameCss> {item.name} </NameCss> 
                        <PriceCss> {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </PriceCss>             
                        { OneItemAdd(item.id) ? (<ButtonAddCart onClickCapture={() => AddProductCart(item.id)}><TiPlus/> Adicionar </ButtonAddCart>)
                        :
                        (<form onSubmit={SubmitForm}>
                            <input
                                type={"number"}
                                name={item.id}
                                onChange={onChange}
                                required
                                min="0"
                                value={formValues.name}
                                ></input>
                            </form>
                            )}
                        <StockCss> {item.qty_stock} </StockCss> 
                    </CartCss>
                    )
                })
            }
        </ContainerCss> 
    )
}