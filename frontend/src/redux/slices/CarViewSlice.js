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
        status: '',
        totalRevenue: 0,
        formatedStartDate: ''
    },

    reducers: {
        calculateTotalRevenues: (state) => {
            let calculatedRevenue = 0;

            state.cars.forEach((item) => {
                calculatedRevenue += item.revenue;
            });
            state.totalRevenue = calculatedRevenue;
        },
        formatDatePattern: (state) => {
            let tempDate = '';

            state.cars.forEach((item) => {
                tempDate = item.startDate;
                tempDate.toLocaleDateString()
            });
            state.formatedStartDate = tempDate;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.loading = false;
            state.cars = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchCars.rejected, (state, action) => {
            state.loading = false;
            state.status = "rejected";
        })
    }
});

export const { calculateTotalRevenues, formatDatePattern } = carTableSlice.actions;

export default carTableSlice.reducer;