export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export function addProduct(product) {
  console.log("action: Aadd product to cart!");
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function removeProduct(id) {
  console.log("action: remove PRODUCT FROM cart");
  return {
    type: REMOVE_PRODUCT,
    payload: id
  };
}
