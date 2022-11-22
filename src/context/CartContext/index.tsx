import { createContext, useEffect, useState } from "react";
import { ICart } from "../../Interfaces/ICart";
import { ICartItem } from "../../Interfaces/ICartItem";
import { IProduct } from "../../Interfaces/IProduct";
import PropTypes from "prop-types";
import Api from "../../api/api";

export interface State {
  cart: ICart;
  products: IProduct[];
}

export const INITIAL_STATE: State = {
  products: [],
  cart: { items: [] },
};

export interface ContextType {
  state: State;
  addToCart: Function;
  removeFromCart: Function;
  increaseQuantity: Function;
  decreaseQuantity: Function;
}

type propTypes = {
    children: PropTypes.ReactElementLike;
  };

export const CartContext = createContext({} as ContextType);

export const CartProvider = ({ children }: propTypes) => {

  const [state, setState] = useState<State>(INITIAL_STATE);

// Adicionado um setTimeout para simular uma requisição a uma API e o recrutador poder visualizar o Loader em funcionamento

  useEffect(() => {
    async function getProducts() {
      const response = await Api.get("/products");
      setState((prevState) => ({
        ...prevState,
        products: response.data,
      }));
    }
    setTimeout(() => {
    getProducts()}, 2000);
  }, []);

 let items = state.cart.items;

  const addToCart = (product: IProduct) => {
    const addItem = items.find((item) => item.product.id === product.id);
    if (addItem) {
      addItem.count = addItem.count + 1;
    } else {
      items.push({ count: 1, product: product });
    }
    setState({ ...state, cart: { items } });
  };

  const increaseQuantity = (product: IProduct) => {
    items.map((item) =>
      item.product.id === product.id ? (item.count = item.count + 1) : item
    );

    setState({ ...state, cart: { items } });
  };

  const decreaseQuantity = (product: IProduct) => {
    const decreaseProduct = items.find(
      (item) => item.product.id === product.id
    );
    if (decreaseProduct) {
      if (decreaseProduct.count > 1) {
        decreaseProduct.count = decreaseProduct.count - 1;
      } else {
        decreaseProduct.count = 1;
      }
    }
    setState({ ...state, cart: { items } });
  };

  const removeFromCart = (product: IProduct) => {
    let removedItem: ICartItem = items[0];
    items.forEach((item) => {
      if (item.product.id === product.id) {
        removedItem = item;
      }
    });
    let indexOf = items.indexOf(removedItem);
    items.splice(indexOf, 1);

    setState({ ...state, cart: { items } });
  };


  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
