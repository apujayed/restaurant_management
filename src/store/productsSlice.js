import { createSlice } from "@reduxjs/toolkit";
import _products from "../data/products";

const initialState = { loading: false, list: [] ,filterlist: []};

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

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const products = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(_products);
    }, 800);
  });

  dispatch(save(products));
};

const productsReducer = productsSlice.reducer;
// export const {filterfood } = productsSlice.actions;
export default productsReducer;
