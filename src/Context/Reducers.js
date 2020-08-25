// cases for switch case
export const AddToCart = 'ADD_TO_CART';
export const RemoveFromCart = 'REMOVE_FROM_CART';
export const RemoveItemFromCart = 'REMOVE_ITEM_FROM_CART';
export const ClearCart = 'CLEAR_CART';

// addToCart function
const addToCart = (product, state) => {
  let totalPrice = 0;
  // previous cart state and index of the product
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  // is item new or existing
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1, total: +product.price });
    updatedCart.forEach((item) => (totalPrice += item.total));
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };

    updatedItem.quantity++;
    updatedItem.total = +(updatedItem.price * updatedItem.quantity).toFixed(2);
    updatedCart[updatedItemIndex] = updatedItem;
    updatedCart.forEach((item) => (totalPrice += item.total));
  }
  totalPrice = +totalPrice.toFixed(2);

  return { ...state, cart: updatedCart, totalPrice: totalPrice };
};

// removeFromCart function
const removeFromCart = (productId, state) => {
  let totalPrice = 0;
  // previous cart state and index of the product
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = { ...updatedCart[updatedItemIndex] };
  updatedItem.quantity--;

  // is quantity zero, then remove product from cart
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedItem.total = +(updatedItem.price * updatedItem.quantity).toFixed(2);
    updatedCart[updatedItemIndex] = updatedItem;
  }
  updatedCart.forEach((item) => (totalPrice += item.total));
  totalPrice = +totalPrice.toFixed(2);

  return { ...state, cart: updatedCart, totalPrice: totalPrice };
};

// removeItemFromCart function
const removeItemFromCart = (productId, state) => {
  let totalPrice = 0;
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  // removing item from cart
  updatedCart.splice(updatedItemIndex, 1);

  updatedCart.forEach((item) => (totalPrice += item.total));
  totalPrice = +totalPrice.toFixed(2);

  return { ...state, cart: updatedCart, totalPrice: totalPrice };
};

// clearCart function
const clearCart = (state) => {
  return { ...state, cart: [], totalPrice: null };
};

// reducer for cart
export const cartReducer = (state, action) => {
  switch (action.type) {
    case AddToCart:
      return addToCart(action.product, state);
    case RemoveFromCart:
      return removeFromCart(action.productId, state);
    case RemoveItemFromCart:
      return removeItemFromCart(action.productId, state);
    case ClearCart:
      return clearCart(state);
    default:
      throw new Error('Not a valid action!');
  }
};
