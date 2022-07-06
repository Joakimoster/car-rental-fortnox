import { configureStore } from "@reduxjs/toolkit";
import CarFormReducer from "../slices/FormCarSlice";
import CarViewReducer from "../slices/CarViewSlice";

const store = configureStore({
    reducer: {
        form: CarFormReducer,
        table: CarViewReducer
    },
});

export default store;