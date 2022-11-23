import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import Spinner from "../components/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icon from "../images/grey-star.svg";
import Modal from "../components/Modal";
const FoodItemContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filterproduct = useSelector((state) => state.products.filterlist);
  console.log(filterproduct);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [displayModal, setDisplayModal] = useState(false);
const [modalData, setModaldata] = useState([]);
  return (
    <>
 {/* {console.log(modalData)} */}
      <div className="col-lg-8 col-xs-6">
    
      <Modal
      displayModal={displayModal}
      setDisplayModal={setDisplayModal}
      modalData={modalData}
      />
        <div className="row allproduct">
        {products.loading && <Spinner/>}
          {filterproduct.length>0&&filterproduct.map((product) => {
            return (
              <div key={product.id} className="col-lg-4 col-xs-6">
                <div className="food-card food-card--vertical bg-white rounded-lg overflow-hidden mb-4 shadow">
                  <div className="food-card_img position-relative">
                  {/* <span class="badge-overlaystrip ">H</span> */}
                  <LazyLoadImage src={product.cover}
        className="food-image" 
        alt="Image Alt"
      />
                    {/* <img className="food-image" src={product.cover} alt="" /> */}
                    {/* <a href="#!">
                      <i className="far fa-heart" />
                    </a> */}
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
                          <p onClick={()=> {
                            setModaldata({
                              img:product.cover,
                              ingredients:product.ingredients
                            });
                            setDisplayModal(!displayModal);

                           
                          }} className="badge badge-success">See more</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="food-card_price">
                          &#2547;<span> {product.price}</span>
                        </div>

                        <button
                         data-mdb-toggle="tooltip" title="Press to add cart"
                          type="button"
                          onClick={()=> {
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
