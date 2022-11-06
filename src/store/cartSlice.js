import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1
        });
      }
    },
    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );
    },  

    deletecart(state, { payload }) {
      const nextCartItems = state.filter(
        (item) => item.id !== payload
      );

      return state = nextCartItems;
   
    },  
    clear(state) {
      return [];
    }
  }
});

export const { addToCart, increament, decrement, clear,deletecart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
