export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export function addProduct(product) {
  console.log("action: Add product to cart");
  return {
    type: ADD_PRODUCT,
    payload: { 
      productId: product.id, 
      price: product.price,
      name: product.name,
      picture: product.picture
    }
  };
}

export function removeProduct(product) {
  console.log("action: remove PRODUCT from cart");
  return {
    type: REMOVE_PRODUCT,
    payload: { 
      productId: product.id, 
      price: product.price 
    }
  };
}
