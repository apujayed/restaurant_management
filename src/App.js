import React from "react";
import { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
import Nav from "./components/Nav";
import Products from "./containers/Products";
import FoodMenu from "./containers/FoodMenu";
=======
// import Nav from "./components/Nav";
// import Cart from "./containers/Cart";
// import Products from "./containers/Products";
// import FoodMenu from "./containers/FoodMenu";
>>>>>>> f4b8408308ac33a92ac4b4ce42e72cd8d88543d2
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
  }
  body {
    margin:0;
    padding-top:60px;
    font-size:14px;

  }

`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
<<<<<<< HEAD
      <Nav />
      <FoodMenu />
      {/* <Cart /> */}
=======

>>>>>>> f4b8408308ac33a92ac4b4ce42e72cd8d88543d2
    </div>
  );
}
