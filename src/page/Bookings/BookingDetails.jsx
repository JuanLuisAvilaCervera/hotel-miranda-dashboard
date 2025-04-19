import { Page } from "../../components/common/page";
import { Button } from "../../components/common/Buttons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookingThunk } from "./BookingThunk";
import { getBookingsStatus } from "./BookingSlice";
import { useEffect, useState } from "react";

export const BookingsDetail = () => {

    const booking = JSON.parse(localStorage.getItem('selectedBooking'))

    const bookingsStatus = useSelector(getBookingsStatus)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const id = booking.booking_id;
    const [updateBooking , setBooking] = useState({...booking})

    

    useEffect(() => console.log(updateBooking), [updateBooking])

    const handleDelete = () => {

        console.log(id)

        dispatch(DeleteBookingThunk(id))

        if(bookingsStatus === 'fulfilled'){
            navigate("/bookings")
        };
    }

    return <Page>
        <Button onClick={handleDelete}>Borrar</Button>
    </Page>
}