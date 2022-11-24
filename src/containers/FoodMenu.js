import React, { useEffect } from "react";
import "../food.css";
import banner from "../images/banner.png";
import FilterMenu from "../components/FilterMenu";
import FoodItemContainer from "./FoodItemContainer";
import CartFood from "./CartFood";
import Footer from "../components/Footer";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
      <AliceCarousel autoPlay autoPlayInterval="1500" infinite disableDotsControls disableButtonsControls>
        <img src={banner} className="sliderimg" />
        <img src={banner} className="sliderimg" />
        <img src={banner} className="sliderimg" />
        <img src={banner} className="sliderimg" />
      </AliceCarousel>
      {/* <img src={banner} class="img-fluid banner" alt="Responsive image" /> */}
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
