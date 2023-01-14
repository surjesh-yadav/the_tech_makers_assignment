import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
const Navbar = () => {
  const state = useSelector((state) => state.cartReducer);

  let updated = state;
  useMemo(() => {
    localStorage.setItem("cart", JSON.stringify(updated));
  }, [updated]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="ms-5"
              style={{ width: "50px", height: "50px" }}
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673592130/WomenChoice-Images/Claudia_Paquet_1_j79jag.png"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ms-5 mb-2  sm-mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About us
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-light ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
