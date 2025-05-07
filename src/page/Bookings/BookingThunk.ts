import { createAsyncThunk } from "@reduxjs/toolkit";
import Booking from "../../interfaces/bookingInterface";

const delay = (ms: number) => new Promise(  resolve => setTimeout(resolve , ms));

const URI = "http://localhost:3000"

const BookingsThunk = createAsyncThunk("bookings/getBookings", async () => 
    {
        try{
            const response = await fetch(URI + "/bookings", {
                method: 'GET',
                headers: { "content-type" : "application/json;charset=UTF-8" , "Authorization" : `Bearer ${localStorage.getItem('token')}`},
                
            })
    
            if(response.ok){
                const json = await response.json();
                console.log(json)
                return json;
            }
    
    
        }catch (error){
    
    
            let message
            if (error instanceof Error){
                message = error.message
                console.error(message)
            }
                 
            else{ message = String(error)
                reportError({ message })
            }
            
        }
    }
)

export const AddBookingsThunk= createAsyncThunk<Booking, Booking>("bookings/addBookings", async (newBooking) =>
{
    try{
        const response = await fetch(process.env.URI + "/users", {
            method: 'POST',
            headers: { "content-type" : "application/json;charset=UTF-8"},
            body: JSON.stringify(newBooking)
        })

        if(response.ok){
            const json = await response.json();
            console.log(json)
            return json;
        }


    }catch (error){


        let message
        if (error instanceof Error){
            message = error.message
            console.error(message)
        }
             
        else{ message = String(error)
            reportError({ message })
        }
        
    }
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