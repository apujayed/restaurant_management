import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios, * as others from 'axios';
import swal from 'sweetalert';
const initialState = { loading: false, cart_data: []};



const API_URL = "https://jsonplaceholder.typicode.com/todos";


export const getTodoAsync = () => async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addOrder = createAsyncThunk("post/getPost", async ({userDetail,cart}) => {


  const response = await axios.post('http://localhost:3009/create',{
    userDetail: userDetail,
    cart: cart
  });
  console.log(response.data);
  swal({
    title: "Done!",
    text: "Your order successfully placed!!",
    icon: "success",
    timer: 2500,
    button: false
  });

});



// export const addOrder = ({userDetail,cart}) => async () => {
//   try {
//     const response = await axios.post('http://localhost:3009/create',{
//       userDetail: userDetail,
//       cart: cart
//     });
//     console.log(response.data);
//     swal({
//       title: "Done!",
//       text: "Your order successfully placed!!",
//       icon: "success",
//       timer: 2500,
//       button: false
//     })
//   } catch (error) {
//     console.error(error);
//   }
// };







const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart_data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart_data.push({ ...action.payload, quantity: 1 });
      }
    },


    increament: (state, action) => {
      const item = state.cart_data.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.cart_data.find((item) => item.id === action.payload);
      item.quantity--;
    },
    deletecart: (state, action) => {
      const removeItem = state.cart_data.filter((item) => item.id !== action.payload);
      state.cart_data = removeItem;
    },
 
    clear(state) {
      state.cart_data = [];
    }
  },extraReducers:{
    [addOrder.pending]:(state,action)=>{
        // state.loading=true
    },
    [addOrder.fulfilled]:(state,action)=>{
      state.cart_data = [];
    },
  

}
});

export const { addToCart, increament, decrement, clear,deletecart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
