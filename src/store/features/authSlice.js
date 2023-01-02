import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import * as ExternalUrl from "../../config/externalUrl";
// import { toast } from "react-toastify";

// const SignUpSlice = createAsyncThunk(
//   "auth/SignUpSlice",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios({
//         method: "post",
//         url: ExternalUrl.signup(),
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: {
//           email: data.email,
//           password: data.password,
//           signUpId: 0,
//           fullName: data.fullName,
//         },
//       });
//       return response;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
// const LoginSlice = createAsyncThunk(
//   "auth/LoginSlice",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: ExternalUrl.login(email),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const slice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? null,
    isAuthenticated: JSON.parse(localStorage.getItem("user")) ? true : false,
    loading: false,
  },

  reducers: {
    login(state, { payload }) {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
  // extraReducers: {
  //   // signup user reducer
  //   [SignUpSlice.pending]: (state) => {
  //     state.loading = true;
  //     localStorage.clear();
  //   },
  //   [SignUpSlice.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.user = payload.data;
  //     // localStorage.setItem("token", JSON.stringify(payload.data.token));
  //   },
  //   [SignUpSlice.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     // toast.error(payload.message);
  //   },

  //   // login user  reducer
  //   [LoginSlice.pending]: (state) => {
  //     console.log("here");
  //     state.loading = true;
  //     localStorage.clear();
  //   },
  //   [LoginSlice.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.user = payload.data;
  //     state.isAuthenticated = true;
  //     localStorage.setItem("user", JSON.stringify(payload.data));
  //   },
  //   [LoginSlice.rejected]: (state, { payload }) => {
  //     state.loading = false;
  //     // toast.error(payload.message);
  //   },
  // },
});

// export { SignUpSlice };
export const { login, logout } = slice.actions;
export default slice.reducer;
