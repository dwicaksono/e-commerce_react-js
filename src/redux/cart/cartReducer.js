import { cartTypeAction } from "./cartType";

const INITIAL_STATE = {
  hidden: true,
};

const cartToggle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypeAction.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartToggle;
