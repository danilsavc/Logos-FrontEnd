import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchOrder = createAsyncThunk("/order/fetchOrder", async (params) => {
    const { data } = await axios.post("/order", params);
    return data;
});

const initialState = {
    ItemsInBasket: [],
    AmountItemInBasket: 0,
    SumPay: 0,
    status: "loading",
};

function CheckRepeatItem(items, checkItem) {
    let indicator = true;
    items.forEach((item) => {
        if(item.id === checkItem.id) {
            indicator = false;
        }
    });
    return indicator;
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setItemInBasket(state, action) {
            if(CheckRepeatItem(state.ItemsInBasket, action.payload)) {
                state.ItemsInBasket.push(action.payload);
            }
            else {
                let NewArrayItem = [];
                let NewObj = action.payload;
                state.ItemsInBasket.forEach((item) => {
                    if(item.id === action.payload.id) {
                        NewObj.amountItem = item.amountItem + 1;
                        NewArrayItem.push(NewObj);
                    }
                    else NewArrayItem.push(item);
                });
                state.ItemsInBasket = NewArrayItem;
            }
            state.AmountItemInBasket += 1;
            state.SumPay += action.payload.price;
        },
        deleteItem(state, action) {
            let NewArrayItem = [];
            // let NewObj = action.payload;
            state.ItemsInBasket.forEach((item) => {
                if(item.id !== action.payload.id) {
                    NewArrayItem.push(item);
                }
            });
            state.ItemsInBasket = NewArrayItem;
            state.AmountItemInBasket -= action.payload.amountItem;
            state.SumPay -= action.payload.price * action.payload.amountItem;
        },
        deleteOneItemFromAmount(state, action) {
            let NewArrayItem = [];
            let NewObj = action.payload;
            state.ItemsInBasket.forEach((item) => {
                if(item.id === action.payload.id) {
                    NewObj.amountItem = item.amountItem - 1;
                    NewArrayItem.push(NewObj);
                }
                else NewArrayItem.push(item);
            });
            state.ItemsInBasket = NewArrayItem;
            state.AmountItemInBasket -= 1;
            state.SumPay -= action.payload.price;
        },
    },
    extraReducers: {
        [fetchOrder.pending]: (state) => {
            state.ItemsInBasket = [];
            state.AmountItemInBasket = 0;
            state.SumPay = 0;
            state.status = "loading";
        },
        [fetchOrder.fulfilled]: (state) => {
            state.ItemsInBasket = [];
            state.status = "loaded";
            state.AmountItemInBasket = 0;
            state.SumPay = 0;
        },
        [fetchOrder.rejected]: (state) => {
            state.ItemsInBasket = [];
            state.status = "error";
        },
    },
});

export const { setItemInBasket, deleteItem, deleteOneItemFromAmount } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
