import { createSlice } from "@reduxjs/toolkit";
import  BookingsThunk, {AddBookingsThunk, DeleteBookingThunk, UpdateBookingThunk} from "./BookingThunk";

 

export const BookingsSlice = createSlice({

    name: 'bookings',
    initialState: {
        status: 'idle',
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
        .addCase(AddBookingsThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(AddBookingsThunk.fulfilled, (state, action) =>{
            state.status = 'fulfilled';
            state.data.push(action.payload);
        })
        .addCase(AddBookingsThunk.rejected, (state,action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(UpdateBookingThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(UpdateBookingThunk.fulfilled, (state, action) =>{
            state.status = 'fulfilled';
            state.data[action.payload.id] = action.payload.updatedBooking;
        })
        .addCase(UpdateBookingThunk.rejected, (state,action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(DeleteBookingThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(DeleteBookingThunk.fulfilled, (state, action) =>{
            state.status = 'fulfilled';
            state.data = [...state.data.filter( (booking) => booking.booking_id !== action.payload)];
        })
        .addCase(DeleteBookingThunk.rejected, (state,action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getBookingsError = (state) => state.bookings.error