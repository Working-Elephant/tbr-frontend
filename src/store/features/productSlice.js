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
    items: [],
    bully: null,
    featured: null,
    quantity: 1,
    subTotal: 0,
    shipping: 0,
    duties: 0,
    tax: 0.025,
    total: 0,
    shippingInfo: null,
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
      cart.items = [...cart.items, payload];
      const amountArray = cart.items.map(({ amount }) => {
        let value = +amount;
        console.log(value, "value add");
        return value;
      });
      cart.subTotal = amountArray.reduce((partialSum, a) => partialSum + a, 0);
      cart.tax = cart.subTotal * 0.025;
      cart.total = cart.subTotal + cart.shipping + cart.tax;
    },

    addShipping: (state, { payload }) => {
      let cart = state.cart;
      cart.shippingInfo = payload;
    },

    addBullyToCart: (state, { payload }) => {
      let cart = state.cart;
      cart.bully = payload;
      cart.duties = 35;
      cart.subTotal = cart.bully.price;
      cart.tax = cart.subTotal * 0.025;
      cart.total = +cart.subTotal + +cart.duties + +cart.tax;
    },
    addFeatured: (state, { payload }) => {
      let cart = state.cart;
      cart.featured = payload;
      //  const amountArray = cart.items.map(({ amount }) => {
      //    let value = +amount;
      //    return value;
      //  });
      cart.subTotal = 100;
      cart.tax = cart.subTotal * 0.025;
      cart.total = cart.subTotal + cart.shipping + cart.tax;
    },
    removeFromCart: (state, { payload }) => {
      let cart = state.cart;
      let filtered = cart.items.filter((item) => item.id !== payload);
      cart.items = filtered;
    },
    increaseQuantity: (state, { payload }) => {
      state.cart.quantity += 1;

      console.log(state, "updated state");
      return state;
    },
    decreaseQuantity: (state, { payload }) => {
      if (state.cart.quantity > 1) {
        state.cart.quantity -= 1;
        return state;
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
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  addShipping,
  addBullyToCart,
  removeFromCart,
  addFeatured,
} = slice.actions;
export default slice.reducer;
