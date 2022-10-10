import { useState, useEffect} from "react";
import {GlobalContext} from "../global/context/useContext.js"
import { useContext } from 'react'

export const useForm = (initialState) => {
    const [formValues, setFormValues] = useState({initialState})
    const { cartSum, setCartSum } = useContext(GlobalContext)

    const onChange = (event) => {
    const {name, value} = event.target
      setFormValues({ ...formValues, [name]: value })
    }
    const cleanFields = () => {
      setFormValues(initialState)
    }
    const addChange = (id) => {
      setFormValues({ ...formValues, [id]: "1" })
      console.log(formValues)
    }
    const OneItemAdd = (id) => {

      // const teste = formValues.initialState
      
      // const result = teste.map((item) => console.log(item)) 

      return true
  }

  useEffect(() => {

    const teste = formValues.initialState
    
    // const teste2 = teste.filter((item) => {return item.id = 20})

    console.log("arry completo",teste)
    // console.log("filtrando dado",teste2)

  },[formValues])

    return {formValues, onChange, cleanFields, addChange, OneItemAdd} 
  }