"use client"
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:[],
    reducers:{
        addEmailId(state,action){
            state.push(action.payload)
        }
    }
})
export const {addEmailId,addPassword} = authSlice.actions
export default authSlice.reducer