import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        
      </Routes>
    </>
  );
}

export default App;
