import React from 'react';
import { CartCss, ContainerCss, NameCss, PriceCss, StockCss,ButtonAddCart,InputCss } from './styled.jsx';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiPlus } from "react-icons/ti";
import { useForm } from '../../hooks/useForm.js';
import { postUserProducts, putUpProductQuantity } from '../../services/ApiShopper.jsx';


export const Cart = () => {
    const { products } = useContext(GlobalContext)
    const {user,cartItem, setTimesAddedProducts, timesAddedProducts} = useContext(GlobalContext)

    const {formValues, onChange} = useForm([{
        id:"",
        quantity:""
    }])    
    const putQuantity = (id) => {
        putUpProductQuantity(id,formValues.quantity)
        setTimeout(() => {
            setTimesAddedProducts(timesAddedProducts + 1)
          }, "100")
    }
    const ItemQuantity = (id) => {
        const result = cartItem && cartItem?.filter((item) =>{
             if(item.id_product == id){
                 if(item.quantity > 0){
                    return item.quantity
                 } 
             }})
        return result[0].quantity
    }
    const OneItemAdd = (id) => {
        const result = cartItem && cartItem?.filter((item) =>{
            if(item.id_product == id){
                    return true
            } 
        })
        return result.length
    }
    const AddProductCart = (idProduct) => {
        postUserProducts(idProduct,user)
        setTimeout(() => {
            setTimesAddedProducts(timesAddedProducts + 1)
          }, "100")
    }
    const SubmitForm = (event) => {
        // event.preventDefault() 
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
                        { OneItemAdd(item.id) === 0 ? (<ButtonAddCart onClickCapture={() => AddProductCart(item.id)}><TiPlus/> Adicionar </ButtonAddCart>)
                        :
                        (
                         <>    
                         <button onClick={() => putQuantity(item.id)}> Confirmar </button>                     
                            <InputCss> 
                                <input
                                    type={"number"}
                                    placeholder={ItemQuantity(item.id) }
                                    name={"quantity"}
                                    onChange={onChange}
                                    required
                                    min="1"
                                    max={item.qty_stock}
                                    value={formValues.name}
                                    ></input>
                              </InputCss>
                            </>   
                            )}
                        <StockCss> {item.qty_stock} </StockCss> 
                    </CartCss>
                    )
                })
            }
        </ContainerCss> 
    )
}