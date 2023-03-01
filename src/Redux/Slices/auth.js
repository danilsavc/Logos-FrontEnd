import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAyth = createAsyncThunk("/auth/fetchAyth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchAythMe = createAsyncThunk("/auth/fetchAythMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

export const fetchRegister = createAsyncThunk("/auth/fetchRegister", async (params) => {
  const { data } = await axios.post("/auth/register", params);
  return data;
});

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAyth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAyth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAyth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAythMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAythMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAythMe.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authMe = (state) => state.auth.data;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
