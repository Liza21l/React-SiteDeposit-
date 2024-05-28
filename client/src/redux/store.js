import { configureStore } from "@reduxjs/toolkit";
import depositSlice from "./slices/depositSlice";

const store =configureStore({
    reducer: {
        deposit: depositSlice
    }
})

export default store