import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
const store = configureStore({
    reducer:{
        crt:cartReducer,
    }
})

export default store;