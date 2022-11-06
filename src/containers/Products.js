import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "../styles.css";
import "../components/slick-theme.css";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import Rbutton from "../components/Button";
import Ripple from "../components/Ripple";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Slider from "react-slick";
export const primaryColor = "#ff6700";

const Loading = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px 20px;
  justify-content: center;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1280px) {
    width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ProductContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 50px auto;
`;
const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #efefef;
  border-radius: 2px;
`;
const ProductTitle = styled.h1`
  margin: 8px 0 4px;
  font-size: 18px;
  font-weight: 400;
  color: #222;
`;
const Price = styled.p`
  margin: 4px 0 12px;
  font-size: 14px;
  color: #666;
`;
export const Button = styled.button`
  padding: 8px 12px;
  color: #fff;
  background-color: ${primaryColor};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f25807;
  }
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
    return (
    <>
<div className="container">

  <div className="content">
    <div className="list">
      <li data-color=".All">All</li>
      <li data-color=".featured">Featured</li>
      <li data-color=".Special">Today's Special</li>
      <li data-color=".Arrivals">New Arrivals</li>
    </div>
    

 <div className="container">
  <h1 className="text-center text-uppercase">Food Order Card</h1>
  <br />
  <br />
  <div className="row">
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
        <div className="food-card_img position-relative">
          <img src="./images/food2.jpg" alt />
          <a href="#!"><i className="far fa-heart" /></a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title"><a href="#!" className="text-dark">Double Cheese Potato Burger</a></h4>
            <div className="d-flex justify-content-between">
              <a href="#!" className="food-card_author">Burger</a>
              <div className="rating-box">
                <div className="rating-stars d-inline-block position-relative mr-2">
                  <img src="images/grey-star.svg" alt />
                  <div className="filled-star" style={{width: '86%'}} />
                </div>
                <a href="#!" className="text-muted"><small>2,144 Reviews</small></a>
              </div>
            </div>
          </div>
          <div className="food-card_bottom-section">
            <div className="d-flex justify-content-between"> 
              <div><span className="fa fa-fire" /> 220 - 280 Kcal</div>
              <div>
                <span className="badge badge-success">Veg</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="food-card_price">
                <span>5.99$</span>
              </div>
              <div className="food-card_order-count">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><i className="fa fa-minus" /></button>
                  </div>
                  <input type="text" className="form-control input-manulator" placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue={0} />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><i className="fa fa-plus" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>							
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="food-card food-card--vertical bg-white rounded-lg overflow-hidden mb-4 shadow">
        <div className="food-card_img position-relative">
          <img src="images/food2.jpg" alt />
          <a href="#!"><i className="far fa-heart" /></a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title"><a href="#!" className="text-dark">Double Cheese Potato Burger</a></h4>
            <div className="d-flex justify-content-between">
              <a href="#!" className="food-card_author">Burger</a>
              <div className="rating-box">
                <div className="rating-stars d-inline-block position-relative mr-2">
                  <img src="images/grey-star.svg" alt />
                  <div className="filled-star" style={{width: '86%'}} />
                </div>
                <a href="#!" className="text-muted"><small>2,144 Reviews</small></a>
              </div>
            </div>
          </div>
          <div className="food-card_bottom-section">
            <div className="d-flex justify-content-between"> 
              <div><span className="fa fa-fire" /> 220 - 280 Kcal</div>
              <div>
                <span className="badge badge-success">Veg</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="food-card_price">
                <span>5.99$</span>
              </div>
              <div className="food-card_order-count">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><i className="fa fa-minus" /></button>
                  </div>
                  <input type="text" className="form-control input-manulator" placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue={0} />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><i className="fa fa-plus" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>							
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</div>


 

      {products.loading && <Loading>加载中...</Loading>}
     
      <ProductsContainer>
        {products.list.map((product) => (
          <ProductContainer key={product.id}>
            <ProductImage
              src={product.cover}
              alt={product.title}
              title={product.title}
            />
            <ProductTitle>{product.title}</ProductTitle>
            <Price>
              {product.price}
              {product.currency}
            </Price>
            <Button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              加入购物车
            </Button>
          </ProductContainer>
        ))}
      </ProductsContainer>
    </>
  );
};

export default Products;
