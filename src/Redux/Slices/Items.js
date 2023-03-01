import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios";

export const fetchItems = createAsyncThunk("items/fetchItems", async (params) => {
  const { categoryId, currentPage } = params;
  if (categoryId === 0) {
    const { data } = await axios.get(`/items?page=${currentPage}&limit=8`);
    return data;
  }
  const { data } = await axios.get(`/items/categoryId/${categoryId}?page=${currentPage}&limit=8`);
  return data;
});

const initialState = {
  items: [],
  countPage: 1,
  currentPage: 1,
  status: "loading",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setCurrenPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchItems.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.status = "loaded";
      state.countPage = actions.payload.countPage;
    },
    [fetchItems.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});
export const { setCurrenPage } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
