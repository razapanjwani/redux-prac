import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counterslice";
import authReducer from "./auth"
import todoReducer from "./Todoslice"
const store = configureStore({
    reducer:{
        mycounter:counterReducer,
        myauth:authReducer,
        mytodo:todoReducer
    }
})
export default store;