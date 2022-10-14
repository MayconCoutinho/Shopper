import React from 'react';
import { 
    HeaderButtonCartCss,
    QuantityCartCss,
    MenuCartCss,ArrowCss,
    FinaliteBuy,
    CartTotalPriceCss,
    ItemCartCSS,
    ScrollCSS,
    EmptyCartCSS} from './styled.jsx';
import { useState } from 'react';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { TiShoppingCart } from "react-icons/ti";
import { deleteProductsUser, putUpProductQuantity, putUpQtyStockQuantity } from '../../services/ApiShopper.jsx';
import { useForm } from '../../hooks/useForm.js';
import { MdRemoveShoppingCart, MdAddShoppingCart } from 'react-icons/md';
import { InputCss,ContainerGridCss,ButtonDeleteCSS, ButtonPutCSS } from '../Cart/styled.jsx';

export const HeaderButtonCart = () => {

const [menuCart, setMenuCartTrue] = useState(false)
const { cartItemSum, cartPriceSum,cartItem, setTimesAddedProducts, timesAddedProducts,products} = useContext(GlobalContext)

const {formValues, onChange} = useForm([{
    id:"",
    quantity:""
}]) 
const StockItemQuantity = (id) => {
    const result = products.filter((item) => {
        return item.id === id
    })
    return result.map((item) => {return item.qty_stock})
}
const PutQuantity = (id) => {
    putUpProductQuantity(id,formValues.quantity)
    setTimeout(() => {
        alert("Produto mudado com sucesso")
        setTimesAddedProducts(timesAddedProducts + 1)
      }, "100")
}
const DeleteProduct = (id) => {
    deleteProductsUser(id)
    setTimeout(() => {
        setTimesAddedProducts(timesAddedProducts + 1)
      }, "100")
}
const UserItemQuantity = (id) => {
    const result = cartItem && cartItem?.filter((item) =>{
         if(item.id_product == id){
             if(item.quantity > 0){
                return item.quantity
             } 
         }})
    return result[0].quantity
}
const FinalizePurchase = () => {
    cartItem.map((item)=> {
        putUpQtyStockQuantity(item.id_product,( StockItemQuantity(item.id_product) - UserItemQuantity(item.id_product)))
        DeleteProduct(item.id_product)
    })
    setTimeout(() => {
        setTimesAddedProducts(timesAddedProducts + 1)
      }, "100")
}
const MenuCart = () => {
    if(menuCart === false){
        setMenuCartTrue(true)
    }
    else{
        setMenuCartTrue(false)
    }
}
    return (
        <>
            <HeaderButtonCartCss onClick={() => MenuCart()} > 
                <QuantityCartCss> {cartPriceSum > 0 ? cartItemSum : 0 } </QuantityCartCss><TiShoppingCart/> 
                <CartTotalPriceCss> {cartPriceSum && cartPriceSum.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 0 } </CartTotalPriceCss>
            </HeaderButtonCartCss>
            <MenuCartCss variant={ menuCart === true}> 
            <ArrowCss variant={ menuCart === true}/> 
            <ScrollCSS>
                {
                cartItem && cartItem.length > 0 ?
                cartItem.map((item, index) => {
                    return(
                    <ItemCartCSS>
                        <h1> <h2> {index + 1}# </h2> {item.name} </h1>
                        <p>  {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        {       
                        <>    
                        <ContainerGridCss>
                            <ButtonPutCSS>
                                <button onClick={() => PutQuantity(item.id_product )}> <MdAddShoppingCart/> </button>  
                                </ButtonPutCSS>                                       
                                <InputCss> 
                                    <input
                                        type={"number"}
                                        placeholder={UserItemQuantity(item.id_product) }
                                        name={"quantity"}
                                        onChange={onChange}
                                        required
                                        min="1"
                                        value={formValues.name}
                                        ></input>
                                    </InputCss>
                                    <ButtonDeleteCSS> 
                                    <button onClick={() => DeleteProduct(item.id_product)}> <MdRemoveShoppingCart/> </button> 
                                </ButtonDeleteCSS>
                        </ContainerGridCss>      
                            </>   
                        }     
                        </p>
                    </ItemCartCSS> )
                } ) 
                    :
                    <EmptyCartCSS> 
                        <img src='https://programada.shopper.com.br/static/img/apple-icon.png' width={100}></img> 
                        <h1> Carrinho Vazio </h1> 
                        <p> Adicione algum item ao Carrinho :) </p> 
                    </EmptyCartCSS>
                } 
            </ScrollCSS>  
            <FinaliteBuy variant={ menuCart === true} onClick={() => {FinalizePurchase()}} > FINALIZAR COMPRA </FinaliteBuy> 
            </MenuCartCss>
        </>
        )
}
