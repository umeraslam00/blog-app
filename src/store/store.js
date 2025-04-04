import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


export const store = configureStore({
    reducers: {
        auth: authSlice
    }
})