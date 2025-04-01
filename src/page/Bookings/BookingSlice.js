import { createSlice } from "@reduxjs/toolkit";
import BookingsThunk from "./BookingThunk";

 

export const BookingsSlice = createSlice({

    name: 'bookings',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(BookingsThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(BookingsThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(BookingsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getBookingsData = (state) => state.bookings.data
export const getBookingsStatus = (state) => state.bookings.status
export const getBookingsError = (state) => state.bookings.error