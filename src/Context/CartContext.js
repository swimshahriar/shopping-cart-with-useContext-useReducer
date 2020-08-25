import React, { createContext, useReducer } from 'react';

import {
  cartReducer,
  AddToCart,
  RemoveFromCart,
  RemoveItemFromCart,
  ClearCart,
} from './Reducers';

// creating global states
export const CartContext = createContext({
  cart: [],
  totalPrice: Number,
  addToCart: (product) => {},
  removeFromCart: (productId) => {},
  removeItemFromCart: (productId) => {},
  clearCart: () => {},
});

const CartContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (product) => {
    // @ts-ignore
    dispatch({ type: AddToCart, product });
  };

  const removeFromCart = (productId) => {
    // @ts-ignore
    dispatch({ type: RemoveFromCart, productId });
  };

  const removeItemFromCart = (productId) => {
    // @ts-ignore
    dispatch({ type: RemoveItemFromCart, productId });
  };

  const clearCart = () => {
    // @ts-ignore
    dispatch({ type: ClearCart });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        totalPrice: cartState.totalPrice,
        addToCart,
        removeFromCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
