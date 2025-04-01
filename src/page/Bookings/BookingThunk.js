import { createAsyncThunk } from "@reduxjs/toolkit";


const BookingsThunk = createAsyncThunk("bookings/getBookings", async () => 
    {
        // const delay = await new Promise( () => setTimeout({}, 200));

         const response = await fetch("/Bookings.json");
         const data = response.json();

         return data;
    }
)


export default BookingsThunk;