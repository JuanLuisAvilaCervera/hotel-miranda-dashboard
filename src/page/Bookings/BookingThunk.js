import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(  resolve => setTimeout(resolve , ms));


const BookingsThunk = createAsyncThunk("bookings/getBookings", async () => 
    {
        await delay(200);
        const response = await fetch("/Bookings.json");
        const data = await response.json();
        return data;
})

export const AddBookingsThunk = createAsyncThunk("bookings/addBookings", async ({newBooking}) =>
{
    await delay(200);
    return newBooking;
})

export const UpdateBookingThunk = createAsyncThunk("bookings/updateBooking", async({booking_id , updatedBooking}) =>
{
    await delay(200);
    return {
        id : booking_id , 
        updatedBooking: updatedBooking
    }
})

export const DeleteBookingThunk = createAsyncThunk("bookings/deleteBooking", async({booking_id}) => {
    await delay(200);
    console.log(booking_id)
    return booking_id;
})

export default BookingsThunk;