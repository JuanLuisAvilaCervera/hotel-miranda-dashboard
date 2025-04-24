import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import Booking from "../../interfaces/bookingInterface";

const delay = (ms) => new Promise(  resolve => setTimeout(resolve , ms));


const BookingsThunk = createAsyncThunk("bookings/getBookings", async () => 
    {
        await delay(200);
        const response = await fetch("/Bookings.json");
        const data = await response.json();

         return data;
    }
)

export const AddBookingsThunk= createAsyncThunk<Booking, Booking>("bookings/addBookings", async (newBooking) =>
{
    await delay(200);
    return newBooking;
})

//{booking_id : number , updatedBooking}

export const UpdateBookingThunk = createAsyncThunk<{id: number , updatedBooking: Booking},{booking_id: number, updatedBooking: Booking}>("bookings/updateBooking", async({booking_id , updatedBooking}) =>
{
    await delay(200);
    return {
        id : booking_id , 
        updatedBooking: updatedBooking
    }
})

export const DeleteBookingThunk = createAsyncThunk<number, number>("bookings/deleteBooking", async(booking_id) => {
    await delay(200);
    return booking_id;
})


export default BookingsThunk;