// import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart";

// export default (state = [], action = {}) => {
//   switch (action.type) {
//     case ADD_PRODUCT:
//       return [...state, { ...action.payload }];

//     case REMOVE_PRODUCT:
//       return state.filter(product => product.id !== action.payload);

//     default:
//       return state;
//   }
// };

import { ADD_PRODUCT } from "../actions/cart";
// REMOVE_PRODUCT

// import update from "react-addons-update"
const initialState = {
  cart: [],
  total: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            productId: action.payload.productId,
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




