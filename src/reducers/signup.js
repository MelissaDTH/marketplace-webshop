import { SIGNUP_SUCCESS } from "../actions/authentication";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
};