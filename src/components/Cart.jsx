import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, deleteFromCart } from "../redux/action/cartAction";
import Footer from "./Footer";
const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const increase = (item) => {
    dispatch(addToCart(item));
  };
  const decrease = (item) => {
    dispatch(deleteFromCart(item));
    alert(`If You want to Delete Click "OK"`);
  };
  const emptyCart = () => {
    return (
      <div className="px-4 bg-light rounded-3 py-5">
        <div width="300px" className="container py-4">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673588300/WomenChoice-Images/cartEmpty_br6wfv.webp"
              alt="emptyCart"
            />
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-1 bg-light rounded-3 py-1">
          <div className="container py-4">
            <div className="row justify-content-center ">
              <div className="col-md-3">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ₹{product.price} = ₹
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-danger me-4"
                  onClick={() => decrease(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => increase(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink to="/" className="btn btn-outline-dark mb-5 w-25 mx-auto">
              Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  <Footer />;

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
