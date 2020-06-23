import { cartTypeAction } from "./cartType";

export const cartToggle = () => ({
  type: cartTypeAction.CART_TOGGLE_HIDDEN,
});
