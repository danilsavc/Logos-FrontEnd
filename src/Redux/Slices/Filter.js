import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  categoryName: "Всі",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.categoryName = action.payload.categoryName;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setCategoryId, setFilters, setCategoryName } = filterSlice.actions;

export default filterSlice.reducer;
