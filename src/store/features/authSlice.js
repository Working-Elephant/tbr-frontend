import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as ExternalUrl from "../../config/externalUrl";
// import { toast } from "react-toastify";


const SignUpSlice = createAsyncThunk("auth/SignUpSlice", async (data, { rejectWithValue }) => {
    try {
        const response = await axios({
            method: "post",
            url: ExternalUrl.signup(),
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email: data.email,
                password: data.password,
                signUpId: 0,
                fullName: data.fullName
            },
        });
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

const slice = createSlice({
    name: "auth",
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {},
    extraReducers: {
        // signup user reducer
        [SignUpSlice.pending]: (state) => {
            state.loading = true;
            localStorage.clear();
        },
        [SignUpSlice.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            // localStorage.setItem("token", JSON.stringify(payload.data.token));
        },
        [SignUpSlice.rejected]: (state, { payload }) => {
            state.loading = false;
            // toast.error(payload.message);
        },
    },
});

export { SignUpSlice };
export default slice.reducer;
