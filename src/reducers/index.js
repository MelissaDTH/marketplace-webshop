import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import category from "./category"
import categories from "./categories"
import products from "./products"

export default combineReducers({
  login,
  signup,
  category,
  categories,
  products
});
