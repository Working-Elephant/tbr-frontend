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
      const response = await axios({
        method: "post",
        url: ExternalUrl.post(),
        headers: {
          "Content-Type": "application/json",
        },
        data,
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
  cart: null,
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
    addToCart: (state, action) => {
      let { id } = action.payload;
      // Get Product
      let arr = state.products.find((item) => item.id === Number(id));
      console.log(arr);
      // arr.quantity =  1;
      state.cart = arr;
      state.cart["quantity"] = 1;
    },
    updateCart: (state, action) => {
      state.cart.quantity = action.payload;
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
      console.log(state.loading, "loading");
    },
    [createPostsSlice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload.data, "payload");
      // state.products = payload.data;
      // toast.success(payload.message)
    },
    [createPostsSlice.rejected]: (state, { payload }) => {
      console.log(payload, "rejected");
      state.loading = false;
      // toast.error(payload.message);
    },
  },
});

export { fetchPostsSlice, createPostsSlice };
export const { addToCart } = slice.actions;
export default slice.reducer;
