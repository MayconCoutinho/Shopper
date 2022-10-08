import React from 'react';
import { CartCss, ContainerCss, NameCss, PriceCss, StockCss,ButtonAddCart } from './styled.jsx';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiPlus } from "react-icons/ti";
import { useForm } from '../../hooks/useForm.js';

export const Cart = () => {
    const { products } = useContext(GlobalContext)
    const { cartSum, setCartSum } = useContext(GlobalContext)

    const {formValues, onChange, cleanFields, addChange, OneItemAdd} = useForm([{

}])

console.log(formValues)

    const SubmitForm = (event) => {
        event.preventDefault() 
        console.log(formValues)
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
                        { OneItemAdd(item.id) ? (<ButtonAddCart onClickCapture={() => addChange(item.id)}><TiPlus/> Adicionar </ButtonAddCart>)
                        :
                        (<form onSubmit={SubmitForm}>
                            <input
                                type={"number"}
                                name={"quantity"}
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