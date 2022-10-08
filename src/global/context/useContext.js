import { createContext } from "react";
import { useState, useEffect} from "react";
import { getProducts } from "../../services/ApiShopper.jsx";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cartSum, setCartSum] = useState(0);


    useEffect(() => {
        const teste = getProducts()
        teste.then((response) => setProducts(response.result))
    },[])

    return (
        <GlobalContext.Provider value={{products, cartSum, setCartSum}}>{children}</GlobalContext.Provider>
    )
} 