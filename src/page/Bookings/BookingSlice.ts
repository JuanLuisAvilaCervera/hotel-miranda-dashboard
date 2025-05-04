import { createSlice, Slice } from "@reduxjs/toolkit";
import  BookingsThunk, {AddBookingsThunk, DeleteBookingThunk, UpdateBookingThunk} from "./BookingThunk";
import { RootState } from "../../app/store";
import Booking from "../../interfaces/bookingInterface";

interface bookingSliceInitialState{
    status : string,
    data: Booking[],
    error: string | undefined |null,

}

export const BookingsSlice : Slice = createSlice({
    name: 'bookings',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    } as bookingSliceInitialState,
    reducers : {},
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
            localStorage.setItem('selectedBooking', JSON.stringify(action.payload))
            const id = state.data.findIndex((booking) => booking.booking_id === action.payload.booking_id);
            state.data[id] = action.payload;
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

export const getBookingsError = (state : RootState) => state.bookings.error;
export const getBookingsStatus = (state : RootState) => state.bookings.status;
export const getBookingsData = (state : RootState) => state.bookings.data;