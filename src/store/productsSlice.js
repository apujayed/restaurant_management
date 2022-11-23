import { createSlice } from "@reduxjs/toolkit";
import _products from "../data/products";
import axios, * as others from 'axios';

const initialState = { loading: false, list: [] ,filterlist: [],category:[]};


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
      state.filterlist = payload;
    },

    filterfood(state,action) {
      const { payload } = action;
      state.filterlist= state.list.filter(
        (item) => item.category ==payload
      );

      // return state.filterlist = nextCartItems;
      // console.log(state.filterlist);
    }, 
  }
});


export const { startFetch, save ,filterfood} = productsSlice.actions;

// export const fetchProducts = () => async (dispatch) => {
// console.log('hghghs');
// };


export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  try {
    const response = await axios.get('http://localhost:3009/products');
    console.log(response.data);
    setTimeout(() => {
      dispatch(save(response.data));     
    }, 800);
  
  } catch (error) {
    console.error(error);
  }


};

// export const fetchProducts = () => async (dispatch) => {
//   dispatch(save([]));
//   dispatch(startFetch());

//   const products = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(_products);
//     }, 800);
//   });

//   dispatch(save(products));
// };


const productsReducer = productsSlice.reducer;
// export const {filterfood } = productsSlice.actions;
export default productsReducer;
