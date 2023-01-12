import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading........</>;
  };

  const filterProduct = (c) => {
    const update = data.filter((x) => x.category === c);
    setFilter(update);
  };

  const AllProducts = () => {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Filter by Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setFilter(data)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProduct("men's clothing")}>
              Men's
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterProduct("women's clothing")}>
              Women's
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterProduct("jewelery")}>
              Jewelery
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterProduct("electronics")}>
              Electronics
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {filter.map((product) => {
          return (
            <>
              <div className=" col-md-3 mb-5  ">
                <div
                  class="card h-100 text-center p-4 shadow p-3 mb-5 bg-white rounded border-0"
                  key={product.id}
                >
                  <img
                    class="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}{" "}
                    </h5>
                    <h6 class="card-text">₹{product.price}</h6>

                    <Link
                      to={`/products/${product.id}`}
                      type="button"
                      className="btn btn-primary btn-sm mr-1 my-1"
                    >
                      View Product
                    </Link>
                    <button
                      onClick={() => addProduct(product)}
                      type="button"
                      className="btn btn-warning btn-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-2"></div>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <AllProducts />}
      </div>
    </div>
  );
};

export default Products;
