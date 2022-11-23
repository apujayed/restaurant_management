import React from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import Products from "./containers/Products";
import FoodMenu from "./containers/FoodMenu";
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
      <Nav />
      <FoodMenu />
      {/* <Cart /> */}
    </div>
  );
}
