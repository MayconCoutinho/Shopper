import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToTeste } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import { useForm,} from "../../hooks/useForm";
import { Header } from "../../components/Header/Header";
import { getProducts } from "../../services";


const HomePage = () => {
  const navigate = useNavigate();
  const { nome } = useContext(GlobalContext)
  const { setNome } = useContext(GlobalContext)  
  const [productsApi, setProductsApi] = useState([])

  // useEffect(() => {
  //   const product = getProducts()
  //   setProductsApi(product)
  // }, []);

  const products = getProducts()
  console.log(products)

  console.log(productsApi)
  
    return (
      <> 
    <Header/>
    </>
    )
}
export default HomePage;