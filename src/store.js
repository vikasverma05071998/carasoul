import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./reducer/reducerSlice";

export const store = configureStore({
    reducer:{
        count: reducerSlice
    }
})