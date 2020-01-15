import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, { ...action.payload }];

    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload);

    default:
      return state;
  }
};
