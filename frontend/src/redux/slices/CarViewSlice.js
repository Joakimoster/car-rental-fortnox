import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk (
    'car/fetchcars',
    async () => {
        return fetch ('http://localhost:8080/api/car/v1/cars')
        .then((response) => response.json());
})

const carTableSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        loading: false,
        status: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.loading = false;
            state.boxes = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchCars.rejected, (state, action) => {
            state.loading = false;
            state.status = "rejected";
        })
    }
});

export default carTableSlice.reducer;