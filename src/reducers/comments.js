import { ALL_COMMENTS } from "../actions/comments";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_COMMENTS:
      return [...action.payload]; // it's an an array of objects
      
    default:
      return state;
  }
}
