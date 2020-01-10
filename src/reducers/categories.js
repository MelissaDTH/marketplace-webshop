import { ALL_CATEGORIES } from "../actions/categories";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_CATEGORIES:
      return [...action.payload]; // it's an an array of objects
      
    default:
      return state;
  }
}
