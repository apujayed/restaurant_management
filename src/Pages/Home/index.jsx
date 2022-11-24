import React from "react";
import { Box } from "@mui/material";
import Nav from "../../components/Nav";
// import Cart from "../../containers/Cart";
import FoodMenu from "../../containers/FoodMenu";
/**
 *@function Home.jsx
 *@author Azim
 *
 **/

export default function Home() {
  return (
    <Box>
      <Nav />
      <FoodMenu />
      {/* <Cart /> */}
    </Box>
  );
}
