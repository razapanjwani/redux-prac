"use client"
import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        addTodo(state,action){
            state.push(...action.payload)
        },
        deleteTodo(state,action){
            state.filter((items)=>items.completed !== action.payload  )
        }
    }
})
export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer