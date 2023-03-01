import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios";

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (params) => {
  const { currentPage } = params;
  const { data } = await axios.get(`/order?page=${currentPage}&limit=3`);
  return data;
});

const initialState = {
  items: [],
  countPage: 1,
  currentPage: 1,
  countItems: 0,
  status: "loading",
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrenPage(state, action) {
      state.currentPage = action.payload;
    },
    deleteItem(state) {
      state.countItems = state.countItems - 1;
    },
  },
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchOrder.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.status = "loaded";
      state.countPage = actions.payload.countPage;
      state.countItems = actions.payload.countItems;
    },
    [fetchOrder.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});
export const { setCurrenPage, deleteItem } = OrderSlice.actions;
export const orderReduser = OrderSlice.reducer;
