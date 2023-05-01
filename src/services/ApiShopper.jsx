import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL.js";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const getUser = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${name}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const getTotalProductsPrice = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/product/total/price/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const getProductsUserQuantity = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/products/${name}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const deleteProductsUser = async (id, user) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/user/products/${id}/${user}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const putUpProductQuantity = async (id, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/${id}/${quantity}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const putUpQtyStockQuantity = async (id, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}/${quantity}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const postUser = async (idName, idDeliveryDate) => {
  try {
    const response = await axios.post(`${BASE_URL}/user`, {
      name: idName,
      delivery_date: idDeliveryDate,
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const postUserProducts = async (idProduct, idUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/products`, {
      id_product: idProduct,
      id_user: idUser,
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
