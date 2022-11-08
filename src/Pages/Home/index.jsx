import React from "react";
import { Box } from "@mui/material";
import Nav from "../../components/Nav";
import Cart from "../../containers/Cart";
import FoodMenu from "../../containers/FoodMenu";
/**
 *@function Home.jsx
 *@author Azim
 *
 **/

const Home = (props) => {
  return (
    <Box>
      <Nav />
      <FoodMenu />
      <Cart />
    </Box>
  );
};

export default Home;
