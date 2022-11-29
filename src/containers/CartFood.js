import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/uiSlice";
import {
  addOrder,
  getTodoAsync,
  increament,
  decrement,
  clear,
  deletecart,
} from "../store/cartSlice";
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { formConrtol } from '../data/homeFormControl';
import FormsGrouped from '../components/Reusable/FormsGrouped';
import { Grid } from '@mui/material';
// import { cartTotalPriceSelector } from "../store/selectors";
const CartFood = () => {
  const cart = useSelector((state) => state.cart.cart_data);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  // const totalPrice = useSelector(cartTotalPriceSelector);

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: "all"
  });
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addOrder({ data, cart }));
    reset()
  }

  return (
    <>

      <Grid item md={4} sm={6} xs={6}>
        {/* <button onClick={() => dispatch(getTodoAsync())}>GET TODO</button> */}

        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <h5 className="mb-3 d-flex">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Your Cart
                            </a>
                          </h5>
                          <i
                            onClick={() => {
                              dispatch(clear());
                            }}
                            className="fas fa-trash-alt"
                          />
                        </div>

                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">
                              You have {cart.length} items in your cart
                            </p>
                          </div>
                          <div>
                            <p className="mb-0">
                              <span className="text-muted">Sort by:</span>{" "}
                              <a href="#!" className="text-body">
                                price <i className="fas fa-angle-down mt-1" />
                              </a>
                            </p>
                          </div>
                        </div>

                        {cart.map((cartItem) => {
                          return (
                            <div className="card mb-3" key={cartItem.id}>
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={cartItem.cover}
                                        className="img-fluid rounded-3 cart-img"
                                        alt="Shopping item"
                                      //   style={{ width: 40 ,height:30}}
                                      />
                                    </div>
                                    <div className="ms-3">
                                      <h6>{cartItem.title}</h6>
                                      {/* <p className="small mb-0">
                                          256GB, Navy Blue
                                        </p> */}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div class=" d-flex">
                                      <button
                                        class="btn btn-link px-2"
                                        disabled={cartItem.quantity == 1}
                                        onClick={() => {
                                          dispatch(decrement(cartItem.id));
                                        }}
                                      >
                                        <i class="fas fa-minus"></i>
                                      </button>

                                      <input
                                        style={{ width: 50 }}
                                        id="form1"
                                        min="0"
                                        name="quantity"
                                        value={cartItem.quantity}
                                        type="text"
                                        class="form-control form-control-sm"
                                      />

                                      <button
                                        class="btn btn-link px-2"
                                        onClick={() => {
                                          dispatch(increament(cartItem.id));

                                        }}
                                      >
                                        <i class="fas fa-plus"></i>
                                      </button>
                                    </div>
                                    <div style={{ width: 40 }}></div>
                                    <div style={{ width: 80 }}>
                                      <h6 className="mb-0">
                                        {" "}
                                        {cartItem.quantity * cartItem.price +
                                          cartItem.currency}
                                      </h6>
                                    </div>
                                    <a href="#!" style={{ color: "#cecece" }}>
                                      <i
                                        className="fas fa-trash-alt"
                                        onClick={() =>
                                          dispatch(deletecart(cartItem.id))
                                        }
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            {/* <p className="mb-2">&#2547;{totalPrice} BDT</p> */}
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Discount</p>
                            <p className="mb-2">&#2547;0 BDT</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            {/* <p className="mb-2">&#2547;{totalPrice} BDT</p> */}
                          </div>
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            <FormsGrouped mapedForm={formConrtol} control={control} errors={errors} />
                            <button
                              type="submit"
                              className="cartb mt-5 btn  btn-block btn-lg"
                            >
                              <div className="d-flex justify-content-between">
                                <span>
                                  Confirm Order{" "}
                                  <i className="fas fa-long-arrow-alt-right ms-2" />
                                </span>
                              </div>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Grid>
    </>
  );
};


export default CartFood;
