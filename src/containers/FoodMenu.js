import React, { useEffect } from "react";
import "../food.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import banner from "../images/banner.png";
import FilterMenu from "../components/FilterMenu";
import FoodItemContainer from "./FoodItemContainer";
import CartFood from "./CartFood";
import Footer from "../components/Footer";
const FoodMenu = () => {


 

  useEffect(() => {
    const buttonRight = document.getElementById("slideRight");
    const buttonLeft = document.getElementById("slideLeft");

    buttonRight.onclick = function () {
      document.getElementById("sidescrl").scrollLeft -= 200;
    };
    buttonLeft.onclick = function () {
      document.getElementById("sidescrl").scrollLeft += 200;
    };
  }, []);
  return (
    <>
      <img src={banner} class="img-fluid banner" alt="Responsive image" />
        <div className="food-body">
        
          <FilterMenu />
          <div className="row">
            <FoodItemContainer />
            <CartFood />
          </div>
        </div>
      <Footer />
    </>
  );
};

export default FoodMenu;
