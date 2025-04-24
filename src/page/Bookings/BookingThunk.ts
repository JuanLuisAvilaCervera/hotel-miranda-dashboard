import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import Booking from "../../interfaces/bookingInterface";
import { update } from "cypress/types/lodash";

const delay = (ms: number) => new Promise(  resolve => setTimeout(resolve , ms));


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

export const UpdateBookingThunk = createAsyncThunk< Booking,Booking>("bookings/updateBooking", async(updatedBooking) =>
{
    await delay(200);
    localStorage.setItem('selectedBooking', JSON.stringify(updatedBooking));
    return updatedBooking;
})

export const DeleteBookingThunk = createAsyncThunk<number, {booking_id : number}>("bookings/deleteBooking", async({booking_id}) => {
    await delay(200);
    return booking_id;
})


export default BookingsThunk;