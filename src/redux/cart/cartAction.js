import { cartTypeAction } from "./cartType";

export const cartToggle = () => ({
  type: cartTypeAction.CART_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: cartTypeAction.CART_ADD_ITEMS,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartTypeAction.CLEAR_ITEM_FROM_CART,
  payload: item,
});
