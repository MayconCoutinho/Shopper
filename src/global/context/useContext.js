import { createContext } from "react";
import { useState, useEffect} from "react";
import { getProducts, getProductsPrice, getProductsUserQuantity,getAllProductsUser} from "../../services/ApiShopper.jsx";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [timesAddedProducts, setTimesAddedProducts ] = useState(0)
    const [cartItemSum, setCartItemSum] = useState(0);
    const [cartPriceSum, setCartPriceSum] = useState(0);
    const [user, setUser] = useState("");

    const teste = getAllProductsUser(16)
    teste.then((response) => { console.log("todos os produtos",response[0])})


    const ReturnPrice = (id) => {
        const result = getProductsPrice(id)
        result.then((response) => {return response[0]})
        return result
    }
    useEffect(() => {
        const teste = ReturnPrice(20)
        teste.then((response) => {console.log("to aqui", response[0])})

        console.log(teste)
    },[timesAddedProducts])

    useEffect(() => {
        const result = getProductsUserQuantity(user)
        result.then((response) => setCartItemSum(response))
    },[user,timesAddedProducts])

    useEffect(() => {
        const result = getProducts()
        result.then((response) => setProducts(response.result))
    },[])

    return (
        <GlobalContext.Provider value={{products, cartItemSum, setCartItemSum, user, setUser,setTimesAddedProducts, timesAddedProducts}}>{children}</GlobalContext.Provider>
    )
} 