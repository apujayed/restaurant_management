import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import Spinner from "../components/Spinner";
import Slider from "react-slick";
// import _products from '../data/products'
import Burger from "../images/food2.jpg";
import icon from "../images/grey-star.svg";
const FoodItemContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filterproduct = useSelector((state) => state.products.filterlist);
  console.log(filterproduct);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
    {/* <Spinner/> */}
      <div className="col-lg-8 col-xs-6">
      
        <div className="row">
        {products.loading && <Spinner/>}
          {filterproduct.length>0&&filterproduct.map((product) => {
            return (
              <div key={product.id} className="col-lg-4 col-xs-6">
                <div className="food-card food-card--vertical bg-white rounded-lg overflow-hidden mb-4 shadow">
                  <div className="food-card_img position-relative">
                    <img className="food-image" src={product.cover} alt="" />
                    <a href="#!">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                  <div className="food-card_content">
                    <div className="food-card_title-section overflow-hidden">
                      <h6 className="food-card_title">
                        <a href="#!" className="text-dark">
                          {product.title}
                        </a>
                      </h6>
                      <div className="d-flex justify-content-between">
                        <a href="#!" className="food-card_author">
                          {product.category}
                        </a>
                        <div className="rating-box">
                          <div className="rating-stars d-inline-block position-relative mr-2">
                            <img className="food-image" src={icon} alt="" />
                            <div
                              className="filled-star"
                              style={{ width: "86%" }}
                            />
                          </div>
                          <a href="#!" className="text-muted">
                            <small>2,144 Reviews</small>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="food-card_bottom-section">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span className="fa fa-fire" />
                          Cooking Time - {product.time} Min
                        </div>
                        <div>
                          <span className="badge badge-success">Veg</span>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="food-card_price">
                          &#2547;<span> {product.price}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            dispatch(addToCart(product));
                          }}
                          class="cartb btn  btn-rounded "
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          
          
          })
        
        }
        </div>
      </div>
    </>
  );
};

export default FoodItemContainer;
