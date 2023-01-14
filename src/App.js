import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { About } from "./components/About";

function App() {
  //recieve state from Child (From Nav) and set to local storage
  const stateFromChild = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
  };

  return (
    <>
      <Nav callback={stateFromChild} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
