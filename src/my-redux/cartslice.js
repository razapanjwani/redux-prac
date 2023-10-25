"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct(state, action) {
      let newItem = action.payload.products;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalPrice = parseFloat(
        state.totalPrice -
          -(action.payload.quantity * action.payload.products.price)
      ).toFixed(2);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          myPrice: action.payload.myPrice,
        });
      } else {
        existingItem.myPrice = parseFloat(
          existingItem.myPrice - -existingItem.price
        ).toFixed(2);
        existingItem.quantity += action.payload.quantity;
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => {
        return item.id != action.payload;
      });
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => parseFloat(total - -item.myPrice).toFixed(2),
        0
      );
    },
    increment(state, action) {
      let existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1
          state.totalPrice = parseFloat(
            state.totalPrice - -existingItem.price
          ).toFixed(2)
        
          existingItem.myPrice = parseFloat(
            existingItem.myPrice - (-existingItem.price)
          ).toFixed(2)
        
      }
      state.totalQuantity += 1;
    },
    decrement(state, action) {
      let existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
          state.totalPrice = parseFloat(
            state.totalPrice - existingItem.price
          ).toFixed(2)
          existingItem.myPrice = parseFloat(
            existingItem.myPrice - existingItem.price
          ).toFixed(2);
        state.totalQuantity -= 1;
      }
    },
  },
});
export const { addProduct, removeProduct, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
