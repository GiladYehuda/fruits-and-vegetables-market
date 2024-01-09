import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ContextOfPro from "./contexts/ContextOfPro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [newproducts, setNewproducts] = useState([]); // for filter products
  const [productsCart, setProductsCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        setProductsArray(items);
        setNewproducts(items);
      });
  }

  const productsFilter = (x) => {
    if (x === "All") setNewproducts(productsArray);
    else if (x === "fruit" || x === "vegetable") {
      setNewproducts(productsArray.filter((item) => item.category === x));
    } else
      setNewproducts(productsArray.filter((item) => item.leaves === "yes"));
  };

  const [isFilter, setIsFilter] = useState(true); // for filter component

  return (
    <ContextOfPro.Provider
      value={{
        productsCart,
        setProductsCart,
        countCart,
        setCountCart,
        TotalPrice,
        setTotalPrice,
        showCart,
        setShowCart,
      }}
    >
      <Router>
        <Navbar
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          productsFilter={productsFilter}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Start />
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="products"
            element={
              <Products
                newproducts={newproducts}
                isFilter={isFilter}
                setIsFilter={setIsFilter}
              />
            }
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </ContextOfPro.Provider>
  );
}

export default App;
