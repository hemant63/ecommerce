import { handleAddToCart, handleUser, isLoggedIn } from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartItems: handleAddToCart,
  Users: handleUser,
  userDetail: isLoggedIn,
});

export default rootReducer;
