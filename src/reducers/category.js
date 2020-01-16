import { CATEGORY_FETCHED } from "../actions/categories";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CATEGORY_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
