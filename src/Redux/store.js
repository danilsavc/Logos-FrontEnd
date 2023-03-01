import { configureStore } from "@reduxjs/toolkit";

import Filter from "./Slices/Filter";
import { itemsReducer } from "./Slices/Items";
import { authReducer } from "./Slices/auth";
import { basketReducer } from "./Slices/basket";
import { orderReduser } from "./Slices/Order";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: Filter,
    auth: authReducer,
    basket: basketReducer,
    order: orderReduser,
  },
});

export default store;
