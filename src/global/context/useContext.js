import { createContext } from "react";
import { useState, useEffect} from "react";
import { getProducts, getTotalProductsPrice, getProductsUserQuantity} from "../../services/ApiShopper.jsx";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productsQuantity, setProductsQuantity] = useState([]);
    const [timesAddedProducts, setTimesAddedProducts ] = useState(0)
    const [cartItemSum, setCartItemSum] = useState(0);
    const [cartItem, setCartItem] = useState(0);
    const [cartPriceSum, setCartPriceSum] = useState(0);
    const [user, setUser] = useState("");

    useEffect(() => {
        if(user){
            const result = getTotalProductsPrice(user)
            result.then((response) => {setCartPriceSum(response[0].price_total)})
        }
    },[timesAddedProducts,user])

    useEffect(() => {
        const result = getProductsUserQuantity(user)
        result.then((response) => {
            setCartItemSum(response.map((item) => item.quantity).reduce((current, total) => current + total))
        })
    },[user,timesAddedProducts])

    useEffect(() => {
        const result = getProductsUserQuantity(user)
        result.then((response) => {setCartItem(response)})
    },[user,timesAddedProducts])
    
    useEffect(() => {
        const result = getProducts()
        result.then((response) => {
        setProducts(response.result)
        setProductsQuantity([])
        response.result.map((item) => {
            setProductsQuantity((productsQuantity) => [...productsQuantity, ...[{"id":item.id , "qty_stock":item.qty_stock}] ])
        })}
        )
    },[timesAddedProducts])

    return (
        <GlobalContext.Provider value={{products, cartItem, cartItemSum, setCartItemSum, user, setUser,setTimesAddedProducts, timesAddedProducts, cartPriceSum, productsQuantity}}>{children}</GlobalContext.Provider>
    )
} 