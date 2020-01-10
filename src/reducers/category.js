import { CATEGORY_FETCHED } from "../actions/categories";

export default (state = {}, action = {}) => {
  // console.log('category from category reducer', action.payload);
  switch (action.type) {
    case CATEGORY_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
