import { cartTypeAction } from "./cartType";
import { addItemsToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartToggle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypeAction.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypeAction.CART_ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartTypeAction.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartToggle;
