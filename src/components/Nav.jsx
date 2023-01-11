import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container">
          <Link class="navbar-brand fw-bold fs-4" to="/">
            TheTechMakers
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">
                  About us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="button">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-shoping-cart"> Login </i>
              </Link>
              <Link to="/register" className="btn btn-outline-dark">
                <i className="fa fa-shoping-cart"> Register </i>
              </Link>
              <Link to="/cart" className="btn btn-outline-dark">
                <i class="fa fa-shopping-cart" aria-hidden="true">
                  Cart
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <Carousel/> */}
    </div>
  );
};

export default Nav;
