import { ADD_TO_CART } from "../constants/cartConstant";
import { DELETE_FROM_CART } from "../constants/cartConstant";
let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}
const cartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      // Check if Product is Already isExist
      const isExist = state.find((item) => item.id === product.id);
      if (isExist) {
        // Increase the Quantity
        localStorage.setItem("cart", JSON.stringify(state));
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        localStorage.setItem("cart", JSON.stringify(state));
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case DELETE_FROM_CART:
      let newProduct = state.filter((pro) => pro.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(newProduct));

      const isExisted = state.find((item) => item.id === product.id);
      if (isExisted.qty === 1) {
        return state.filter((item) => item.id !== isExisted.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default cartReducer;
