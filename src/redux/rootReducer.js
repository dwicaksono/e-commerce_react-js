import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReduser from "./cart/cartReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReduser,
});
