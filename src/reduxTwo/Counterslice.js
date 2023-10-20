"use client"
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        val : 1
    },
    reducers:{
        increment(state){state.val += 2},
        decrement(state){state.val -= 2}
    }
})
export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer