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
// import { cartTotalPriceSelector } from "../store/selectors";
const CartFood = () => {
  const cart = useSelector((state) => state.cart.cart_data);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  // const totalPrice = useSelector(cartTotalPriceSelector);
  const [userDetail, setUserdetail] = useState({
    name: "",
    phone: "",
    table_id: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserdetail({ ...userDetail, [name]: value });
  };

  return (
    <>
      <div className="col-lg-4 col-xs-4 col-12">
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
                          <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input
                              type="email"
                              name="name"
                              value={userDetail.name}
                              autoComplete="off"
                              onChange={getUserData}
                              class="form-control"
                              aria-describedby="emailHelp"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input
                              type="number"
                              class="form-control"
                              name="phone"
                              autoComplete="off"
                              onChange={getUserData}
                              value={userDetail.phone}
                              aria-describedby="emailHelp"
                              placeholder="Enter your phone"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Table No</label>
                            <input
                              type="number"
                              class="form-control"
                              name="table_id"
                              autoComplete="off"
                              onChange={getUserData}
                              value={userDetail.table_id}
                              aria-describedby="emailHelp"
                              placeholder="Enter your table id"
                            />
                          </div>
                          <button
                            onClick={() => {
                              if (
                                cart.length < 0 ||
                                userDetail.name == "" ||
                                userDetail.phone == "" ||
                                userDetail.table_id == ""
                              ) {
                                alert("Fill up all field");
                              } else {
                                dispatch(addOrder({ userDetail, cart }));
                                setUserdetail({
                                  ...userDetail,
                                  name: "",
                                  phone: "",
                                  table_id: "",
                                });
                              }
                            }}
                            type="button"
                            className="cartb mt-5 btn  btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              {/* <span>&#2547;{totalPrice}</span> */}
                              <span>
                                Confirm Order{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2" />
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


export default CartFood;
