import { Page } from "../../components/common/page";
import { Button } from "../../components/common/Buttons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookingThunk } from "./BookingThunk";
import { getBookingsStatus } from "./BookingSlice";
import { useEffect, useState } from "react";
import { ConfirmModal } from "../../components/common/Forms/Modal";

export const BookingsDetail = () => {

    const booking = JSON.parse(localStorage.getItem('selectedBooking'))

    const bookingsStatus = useSelector(getBookingsStatus)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [deleteModal , setModal] = useState("none");

    const handleDelete = () => {

        console.log(booking.booking_id)

        const booking_id = booking.booking_id;

        dispatch(DeleteBookingThunk({booking_id}))

        console.log(bookingsStatus)

        if(bookingsStatus === 'fulfilled'){
            navigate("/bookings")
        };
    }

    

    return <Page>

        <div>
            <p>Booking id: {booking.booking_id}</p>
            <p>Order date: {booking.order_date}</p>

        </div>
        <Button onClick={() => {setModal("block")}}>Borrar</Button>
        <ConfirmModal $display={deleteModal}>
            <p>Are you sure you want to delete booking {booking.booking_id} ?</p>
            <hr />
            <Button onClick={ () => setModal("none")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </ConfirmModal>
    </Page>
}