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
  // const [productsArray, setProductsArray] = useState([
  //   {
  //     id: 1,
  //     title: "Banana",
  //     price: 1.92,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "http://www.pngall.com/wp-content/uploads/2016/04/Banana-PNG.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "Apple",
  //     price: 2.31,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/apple.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 3,
  //     title: "Peach",
  //     price: 2.86,
  //     category: "fruit",
  //     leaves: "no",
  //     image:
  //       "http://icons.iconarchive.com/icons/artbees/paradise-fruits/256/Peach-icon.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 4,
  //     title: "Strawberry",
  //     price: 4.69,
  //     category: "fruit",
  //     leaves: "no",
  //     image:
  //       "https://static.wixstatic.com/media/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png/v1/fill/w_256,h_256,fp_0.50_0.50/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 5,
  //     title: "Tomato",
  //     price: 1.42,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/tomato.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 6,
  //     title: "Cherry",
  //     price: 3.73,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/cherry.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 7,
  //     title: "Watermelom",
  //     price: 0.84,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/watermelon.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 8,
  //     title: "Mango",
  //     price: 3.73,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/mango.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 9,
  //     title: "Lemon",
  //     price: 2.57,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/lemon1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 10,
  //     title: "Cucumber",
  //     price: 1.99,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/cucumber1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 11,
  //     title: "Onion",
  //     price: 1.42,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/onion1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 12,
  //     title: "Red pepper",
  //     price: 2.28,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/pilpel_gamba.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 13,
  //     title: "Pineapple",
  //     price: 9.22,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/pineapple1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 14,
  //     title: "Coriander",
  //     price: 1.42,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/Coriander.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 15,
  //     title: "Parsley",
  //     price: 1.27,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/parsley1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 16,
  //     title: "Lettuce",
  //     price: 2.28,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/lettuce1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 17,
  //     title: "Pear",
  //     price: 2.57,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/pear1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 18,
  //     title: "Garlic",
  //     price: 1.99,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/garlic1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 19,
  //     title: "Eggplant",
  //     price: 0.84,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/eggplant1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 20,
  //     title: "Red grape",
  //     price: 5.46,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/red_grape1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 21,
  //     title: "Avocado",
  //     price: 2.69,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/avocado1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 22,
  //     title: "Celery",
  //     price: 2.28,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/Celery1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 23,
  //     title: "Dill",
  //     price: 1.48,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/dill.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 24,
  //     title: "Beet",
  //     price: 1.13,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/beet1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 25,
  //     title: "Lychee",
  //     price: 4.6,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/lychee1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 26,
  //     title: "Fennel",
  //     price: 1.99,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/fennel.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 27,
  //     title: "Orange",
  //     price: 1.13,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/orange1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 28,
  //     title: "Melon",
  //     price: 1.43,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/melon1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 29,
  //     title: "Potato",
  //     price: 1.64,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/Potato1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 30,
  //     title: "Baby leaves",
  //     price: 4.02,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/baby_Leaves1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 31,
  //     title: "Basil",
  //     price: 3.73,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/basil1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 32,
  //     title: "Carrot",
  //     price: 1.3,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/carrot1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 33,
  //     title: "Pumpkin",
  //     price: 2.86,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/pumpkin1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 34,
  //     title: "Cabbage",
  //     price: 1.23,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/cabbage1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 35,
  //     title: "Mint",
  //     price: 1.42,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/mint1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 36,
  //     title: "Rosemary",
  //     price: 1.99,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/rosemary1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 37,
  //     title: "Radish",
  //     price: 1.71,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/radish1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 38,
  //     title: "corn",
  //     price: 1.59,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/corn.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 39,
  //     title: "Kohlrabi",
  //     price: 2.28,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/kohlrabi1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 40,
  //     title: "Kiwi",
  //     price: 6.64,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/kiwi1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 41,
  //     title: "Nectarine",
  //     price: 3.15,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/nectarine1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 42,
  //     title: "Mushrooms",
  //     price: 12.98,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/Mushroom_Champignon.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 43,
  //     title: "Sweet potato",
  //     price: 2.57,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/Sweet-potatoes1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 44,
  //     title: "Cauliflower",
  //     price: 2.72,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/cauliflower.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 45,
  //     title: "Fig",
  //     price: 11.53,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/fig1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 46,
  //     title: "Zucchini",
  //     price: 2.6,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/zucchini1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 47,
  //     title: "Oregano",
  //     price: 1.99,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/oregano1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 48,
  //     title: "Coconut",
  //     price: 2,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/coconut1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 49,
  //     title: "Squash",
  //     price: 2.6,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/Squash1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 50,
  //     title: "Yellow pepper",
  //     price: 1.71,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/Yellow-pepper1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 51,
  //     title: "Beans",
  //     price: 4.89,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/beans1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 52,
  //     title: "Spinach",
  //     price: 4.02,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/Spinach1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 53,
  //     title: "plum",
  //     price: 1.99,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/plum1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 54,
  //     title: "Blueberries",
  //     price: 7.2,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/Blueberries1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 55,
  //     title: "Green onion",
  //     price: 1.71,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/Green-onion.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 56,
  //     title: "Sage",
  //     price: 3.49,
  //     category: "",
  //     leaves: "yes",
  //     image: "./pictures/Sage1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 57,
  //     title: "Apricot",
  //     price: 5.75,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/Apricot1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 58,
  //     title: "Cherry tomatoes",
  //     price: 2.05,
  //     category: "vegetable",
  //     leaves: "no",
  //     image: "./pictures/cherry_tomatoes1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 59,
  //     title: "Passion fruit",
  //     price: 10.12,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/passion-fruit1.png",
  //     amount: 0,
  //   },
  //   {
  //     id: 60,
  //     title: "Pomegranate",
  //     price: 3.15,
  //     category: "fruit",
  //     leaves: "no",
  //     image: "./pictures/Pomegranate1.png",
  //     amount: 0,
  //   },
  // ]);

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
