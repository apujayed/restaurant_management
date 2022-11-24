import React, { useEffect ,useState} from "react";
import "../food.css";
import banner from "../images/banner.png";
import FilterMenu from "../components/FilterMenu";
import FoodItemContainer from "./FoodItemContainer";
import CartFood from "./CartFood";
import Footer from "../components/Footer";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Pusher from 'pusher-js';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
const FoodMenu = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

 const [msg, setMsg] = useState([]);
 useEffect(()=>{
  const pusher = new Pusher('4878a7a1d217f890b537', {
    cluster: 'mt1',
    encrypted: true
  });
  const channel = pusher.subscribe('chat');
  channel.bind('message', data => {
    alert('You have a new order')
    dispatch(fetchProducts());
 
  });
 },[])

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
      <img src={banner} className="sliderimg"/>
      <img src={banner} className="sliderimg"/>
      <img src={banner} className="sliderimg"/>
      <img src={banner} className="sliderimg"/>
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
