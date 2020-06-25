import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user/userReducer";
import cartReduser from "./cart/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReduser,
});

export default persistReducer(persistConfig, rootReducer);
