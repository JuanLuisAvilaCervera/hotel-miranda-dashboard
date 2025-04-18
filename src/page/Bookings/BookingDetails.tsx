import React from "react";
import { Page } from "../../components/common/page";
import { Button } from "../../components/common/Buttons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookingThunk } from "./BookingThunk";
import Booking from "../../interfaces/bookingInterface";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";

export const BookingsDetail = (booking : Booking) => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    
    const bookingsData = useSelector((state : RootState) => state.bookings.data);
    const bookingsStatus = useSelector((state : RootState) => state.bookings.status);

    const id : number = booking.booking_id;
    const [updateBooking , setBooking] = useState({...booking})

    

    useEffect(() => console.log(updateBooking), [updateBooking])

    const handleDelete = () => {
        dispatch(DeleteBookingThunk(id));
        if(bookingsStatus === 'fulfilled'){
            navigate("/bookings")
        };
    }

    return <Page $alignment="">
        <Button $backgroundcolor="" onClick={handleDelete}>Borrar</Button>
    </Page>
}