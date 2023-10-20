"use client";
import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        value:0
    },
    reducers:{
        add(state){
            state.value +=1
        },
        sub(state){
            state.value -= 1
        }
    }
})

export const {add,sub} =cartSlice.actions;
export default cartSlice.reducer;