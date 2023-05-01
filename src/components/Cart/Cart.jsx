import React from "react";
import {
  CartCss,
  ContainerCss,
  NameCss,
  PriceCss,
  StockCss,
  ButtonAddCart,
  InputCss,
  ContainerGridCss,
  ButtonDeleteCSS,
  ButtonPutCSS,
  CartBlockCss,
} from "./styled.jsx";
import { useContext } from "react";
import { GlobalContext } from "../../global/context/useContext.js";
import { TiPlus } from "react-icons/ti";
import { MdRemoveShoppingCart, MdAddShoppingCart } from "react-icons/md";
import { useForm } from "../../hooks/useForm.js";
import {
  deleteProductsUser,
  postUserProducts,
  putUpProductQuantity,
} from "../../services/ApiShopper.jsx";

export const Cart = () => {
  const { products } = useContext(GlobalContext);
  const { user, cartItem, setTimesAddedProducts, timesAddedProducts } =
    useContext(GlobalContext);

  const { formValues, onChange } = useForm([
    {
      id: "",
      quantity: "",
    },
  ]);
  const PutQuantity = (id, totalQuantity) => {
    if (formValues.quantity <= totalQuantity) {
      putUpProductQuantity(id, formValues.quantity);
      setTimeout(() => {
        alert("Produto mudado com sucesso");
        setTimesAddedProducts(timesAddedProducts + 1);
      }, "100");
    } else {
      alert("A quantidade de produto é maior do que a de estoque");
    }
  };
  const DeleteProduct = (id) => {
    deleteProductsUser(id, user);
    setTimeout(() => {
      setTimesAddedProducts(timesAddedProducts + 1);
    }, "100");
  };
  const ItemQuantity = (id) => {
    const result =
      cartItem &&
      cartItem?.filter((item) => {
        if (item.id_product == id) {
          if (item.quantity > 0) {
            return item.quantity;
          }
        }
      });
    return result[0].quantity;
  };
  const OneItemAdd = (id) => {
    const result =
      cartItem &&
      cartItem?.filter((item) => {
        if (item.id_product == id) {
          return true;
        }
      });
    return result.length;
  };
  const AddProductCart = (idProduct) => {
    postUserProducts(idProduct, user);
    setTimeout(() => {
      setTimesAddedProducts(timesAddedProducts + 1);
    }, "100");
  };
  return (
    <ContainerCss>
      {products &&
        products.map((item) => {
          return (
            <CartCss key={item.id}>
              <CartBlockCss key={item.id} variant={item.qty_stock === 0}>
                <p> Produto fora de estoque </p>
              </CartBlockCss>
              <NameCss> {item.name} </NameCss>
              <PriceCss>
                {" "}
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </PriceCss>
              {OneItemAdd(item.id) === 0 ? (
                <ButtonAddCart onClickCapture={() => AddProductCart(item.id)}>
                  <TiPlus /> Adicionar{" "}
                </ButtonAddCart>
              ) : (
                <>
                  <ContainerGridCss>
                    <ButtonPutCSS>
                      <button
                        onClick={() => PutQuantity(item.id, item.qty_stock)}
                      >
                        {" "}
                        <MdAddShoppingCart />{" "}
                      </button>
                    </ButtonPutCSS>
                    <InputCss>
                      <input
                        type={"number"}
                        placeholder={ItemQuantity(item.id)}
                        name={"quantity"}
                        onChange={onChange}
                        required
                        min="1"
                        max={item.qty_stock}
                        value={formValues.name}
                      ></input>
                    </InputCss>
                    <ButtonDeleteCSS>
                      <button onClick={() => DeleteProduct(item.id)}>
                        {" "}
                        <MdRemoveShoppingCart />
                      </button>
                    </ButtonDeleteCSS>
                  </ContainerGridCss>
                </>
              )}
              <StockCss> {item.qty_stock} </StockCss>
            </CartCss>
          );
        })}
    </ContainerCss>
  );
};
