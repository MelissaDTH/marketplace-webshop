import { ADD_PRODUCT } from "../actions/cart";
// REMOVE_PRODUCT

// import update from "react-addons-update"
const initialState = {
  cart: [],
  total: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            productId: action.payload.productId,
            name: action.payload.name,
            picture: action.payload.picture,
            quantity: 1,
            price: parseFloat(action.payload.price)
          }
        ],
        total: state.total + parseFloat(action.payload.price * 1)
      }

    default:
      return state;
  }
};




