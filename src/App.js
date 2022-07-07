import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [productsArray, setProductsArray] = useState([
    {
      id: 1,
      title: "Banana",
      price: "0.99$",
      category: "fruit",
      leaves: "no",
      image: "http://www.pngall.com/wp-content/uploads/2016/04/Banana-PNG.png",
    },
    {
      id: 2,
      title: "Apple",
      price: "0.49$",
      category: "fruit",
      leaves: "no",
      image:
        "https://o.remove.bg/downloads/fa986589-03bb-46ce-9a84-dbb03da5fcb8/%D7%AA%D7%A4%D7%95%D7%97-removebg-preview.png",
    },
    {
      id: 3,
      title: "Peach",
      price: "0.29$",
      category: "fruit",
      leaves: "no",
      image:
        "http://icons.iconarchive.com/icons/artbees/paradise-fruits/256/Peach-icon.png",
    },
    {
      id: 4,
      title: "strawberry",
      price: "1.49$",
      category: "fruit",
      leaves: "no",
      image:
        "https://static.wixstatic.com/media/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png/v1/fill/w_256,h_256,fp_0.50_0.50/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png",
    },
    {
      id: 5,
      title: "Tomato",
      price: "0.49$",
      category: "vegetable",
      leaves: "no",
      image:
        "https://o.remove.bg/downloads/04bbef8b-6f3d-45d7-82e3-d8c1ffb0a672/%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%94-removebg-preview.png",
    },
    {
      id: 6,
      title: "Cherry",
      price: "1.99$",
      category: "fruit",
      leaves: "no",
      image:
        "https://o.remove.bg/downloads/91fbe5a7-fb80-4da2-ae4d-a69c9133f1ba/%D7%93%D7%95%D7%91%D7%93%D7%91%D7%9F-removebg-preview.png",
    },
    {
      id: 7,
      title: "Watermelom",
      price: "1.99$",
      category: "fruit",
      leaves: "no",
      image:
        "https://o.remove.bg/downloads/0a023a2c-f3ba-4139-99e1-170425a65bb3/%D7%90%D7%91%D7%98%D7%99%D7%97-removebg-preview.png",
    },
  ]);

  const [newproducts, setNewproducts] = useState(productsArray); // for filter products
  const productsFilter = (x) => {
    if (x === "All") setNewproducts(productsArray);
    else {
      setNewproducts(productsArray.filter((item) => item.category === x));
    }
  };

  const [isFilter, setIsFilter] = useState(true); // for filter component

  return (
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
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
