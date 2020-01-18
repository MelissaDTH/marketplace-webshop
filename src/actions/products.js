import request from "superagent";

const baseUrl = "http://localhost:4000";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";
export const NEW_PRODUCT = "NEW_PRODUCT";

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

// GET 1 PRODUCT
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

// CREATE PRODUCT
function newProduct(payload) {
  return {
    type: NEW_PRODUCT,
    payload
  };
}

export const createProduct = (name, picture, price, description, color, categoryId) => dispatch => getState => {
  const state = getState()
  const { login } = state

  request
    .post(`${baseUrl}/category/${categoryId}/products/`)
    .set("Authorization", `Bearer ${login}`)
    .send({name, picture, price, description, color, categoryId})
    .then(response => {      
      const action = newProduct(response.body)

      dispatch(action)
    })
    .catch(console.error);
};
