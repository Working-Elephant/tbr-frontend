import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as ExternalUrl from "../../config/externalUrl";
import { featuredAdsData } from "../../data";

const fetchPostsSlice = createAsyncThunk(
  "product/fetchPostsSlice",
  async (_, { rejectWithValue }) => {
    try {
      console.log("caleed");
      return await axios({
        method: "get",
        url: ExternalUrl.post,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const createPostsSlice = createAsyncThunk(
  "product/createPostsSlice",
  async (data, { rejectWithValue }) => {
    try {
      console.log("called", data);
      const response = await axios({
        method: "post",
        url: ExternalUrl.post,
        headers: {
          "Content-Type": "application/json",
        },
        data: { data },
      });
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  loading: false,
  products: featuredAdsData,
  cart: {
    item: null,
    quantity: 1,
    subTotal: 0,
    shipping: 0,
    duties: 0,
    tax: 0,
    total: 0,
  },
  //   single: null,
};
const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Get Single Product
    // getProductById: (state, action) => {
    //   let { id } = action.payload;
    //   let arr = state.products.find((item) => item.id === parseInt(id));
    //   state.single = arr;
    // },
    addToCart: (state, { payload }) => {
      let cart = state.cart;
      cart.item = payload;
      cart.subTotal = cart.quantity * payload.price;
      cart.total = cart.subTotal + cart.shipping + cart.tax;
    },
    // filterProducts: (state, { payload }) => {
    //   state.cart.quantity = payload;
    // },
    increaseQuantity: (state, { payload }) => {
      state.cart.quantity += 1;
    },
    decreaseQuantity: (state, { payload }) => {
      if (state.cart.quantity > 1) {
        state.cart.quantity -= 1;
      }
    },
  },
  extraReducers: {
    // posts reducer
    [fetchPostsSlice.pending]: (state) => {
      state.loading = true;
    },
    [fetchPostsSlice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload.data;
    },
    [fetchPostsSlice.rejected]: (state, { payload }) => {
      state.loading = false;
      // toast.error(payload.message);
    },
    [createPostsSlice.pending]: (state) => {
      state.loading = true;
      console.log("called");
    },
    [createPostsSlice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.products = payload.data;
      // toast.success(payload.message)
    },
    [createPostsSlice.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log("REJECTED");
      // toast.error(payload.message);
    },
  },
});

export { fetchPostsSlice, createPostsSlice };
export const { addToCart, increaseQuantity, decreaseQuantity } = slice.actions;
export default slice.reducer;
