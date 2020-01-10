import request from "superagent";

const baseUrl = "http://localhost:4000";

export const SET_PRODUCTS = "SET_PRODUCTS";

// get the products
function allProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
}

export const getProducts = categoryId => dispatch => {
  request(`${baseUrl}/category/${categoryId}/products`)
    .then(response => {
      console.log("response test", response);
      const action = allProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

