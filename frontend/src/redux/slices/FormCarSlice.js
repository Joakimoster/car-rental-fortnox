import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewCar = createAsyncThunk (
    "car/createNewCar",
    async ({ values }) => {
        return fetch ("http://localhost:8080/api/car/v1/car", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                car: values.car,
                startDate: values.startDate,
                endDate: values.endDate,
                name: values.name,
                age: values.age,
            }),
        }).then((res) => res.json());
    }
)

const carFormSlice = createSlice({
    name: 'car',
    initialState: {
        car: [],
        loading: false,
        status: ''
    },
    extraReducers: (builder) => {
        builder.addCase(createNewCar.pending, (state, action) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(createNewCar.fulfilled, (state, action) => {
            state.loading = false;
            state.box = action.payload;
            state.status = "success";
        })
        builder.addCase(createNewCar.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = "rejected";
        })
    }
});

export default carFormSlice.reducer;