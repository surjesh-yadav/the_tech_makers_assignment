import { ADD_TO_CART } from "../constants/cartConstant";
import { DELETE_FROM_CART } from "../constants/cartConstant";

// For Add Item to Cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// For Delete Item From Cart
export const deleteFromCart = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};
