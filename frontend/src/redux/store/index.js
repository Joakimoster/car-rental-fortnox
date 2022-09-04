import { configureStore } from "@reduxjs/toolkit";
import CarFormReducer from "../slices/FormCarSlice";
import CarViewReducer from "../slices/CarViewSlice";

const store = configureStore({
    reducer: {
        form: CarFormReducer,
        cars: CarViewReducer
    },
});

export default store;