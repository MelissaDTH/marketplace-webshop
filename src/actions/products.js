import request from "superagent";

const baseUrl = "http://localhost:4000";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";

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
      const action = allProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Get one product
function OneProduct(product) {
  return {
    type: SET_PRODUCT,
    payload: product
  };
}

export const getOneProduct = productId => dispatch => {
  request(`${baseUrl}/products/${productId}`)
    .then(response => {
      const action = OneProduct(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
