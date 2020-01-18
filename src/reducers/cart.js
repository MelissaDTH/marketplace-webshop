import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart";
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
            color: action.payload.color,
            quantity: 1,
            price: parseFloat(action.payload.price)
          }
        ],
        total: state.total + parseFloat(action.payload.price * 1)
      }

      case REMOVE_PRODUCT:
        return {
          cart: state.cart.filter(
            product => product.productId !== action.payload.productId
          ),
          total: state.total - parseFloat(action.payload.price)
        };  

    default:
      return state;
  }
};




