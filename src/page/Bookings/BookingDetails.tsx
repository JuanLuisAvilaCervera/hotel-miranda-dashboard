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


    const [deleteModal , setModal] = useState("none");
    const [displayConfig , setConfig] = useState("none");

    const handleDelete = () => {

        console.log(booking.booking_id)

        const booking_id = booking.booking_id;

        dispatch(DeleteBookingThunk({booking_id}))

        console.log(bookingsStatus)

        if(bookingsStatus === 'fulfilled'){
            navigate("/bookings")
        };
    }

    

    useEffect(() => console.log(updateBooking), [updateBooking])

    
    return <Page $alignment="">
        <Container>
            
            <Details>
                
                <DetailNav>
                    <StyledIcon>
                        <FaArrowLeft onClick={ () => navigate("/bookings")}/>
                    </StyledIcon>
                    <StyledIcon>
                        <CiMenuKebab onClick={ () =>
                        {
                            displayConfig === "block" ? 
                            setConfig("none")
                                : setConfig("block")
                        }
                        } />
                    </StyledIcon>
                    <ConfigModal $display={displayConfig}>
                        <ModalOption onClick={() => {navigate("/updateBooking")}}>Editar</ModalOption>
                        <ModalOption onClick={() => {setModal("block")}}>Borrar</ModalOption>
                    </ConfigModal>
                </DetailNav>
                <div>
                    <p>Booking id: {booking.booking_id}</p>
                    <p>Room id: {booking.room_id}</p>
                    <p>Client id: {booking.client_id}</p>

                    <p>Order date: {booking.order_date}</p>

                    <p>Check in: {booking.check_in_date}</p>
                    <p>Check out: {booking.check_out_date}</p>
                    <p>Status : {booking.status}</p>
                    <p>Special requests: {booking.special_request}</p>
                </div>
                

            </Details>
            <PhotoDetails>
                <RoomImage src={example} alt="" />
            </PhotoDetails>
        </Container>

        <ConfirmModal $display={deleteModal}>
            <p>Are you sure you want to delete booking {booking.booking_id} ?</p>
            <hr />
            <Button onClick={ () => setModal("none")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </ConfirmModal>
        </Page>
}

// import { Container, DetailNav, Details,  PhotoDetails, RoomImage } from "../../components/common/details";
// import { Button } from "../../components/common/Buttons";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { DeleteBookingThunk } from "./BookingThunk";
// import { getBookingsStatus } from "./BookingSlice";
// import { useState } from "react";
// import { ConfigModal, ConfirmModal, ModalOption } from "../../components/common/Forms/Modal";

// import example from "../../resources/img/Details/example.jpg";
// import BackArrowIcon from "../../resources/img/Layout/search.png"
// import { Page } from "../../components/common/page";
// import { IconContext } from "react-icons";
// import { StyledIcon } from "../../components/common/icons";
// import { CiMenuKebab } from "react-icons/ci";

// import { FaArrowLeft } from "react-icons/fa";



// export const BookingsDetail = () => {

//     const booking = JSON.parse(localStorage.getItem('selectedBooking'))

//     const bookingsStatus = useSelector(getBookingsStatus)

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const [deleteModal , setModal] = useState("none");
//     const [displayConfig , setConfig] = useState("none");

//     const handleDelete = () => {

//         console.log(booking.booking_id)

//         const booking_id = booking.booking_id;

//         dispatch(DeleteBookingThunk({booking_id}))

//         console.log(bookingsStatus)

//         if(bookingsStatus === 'fulfilled'){
//             navigate("/bookings")
//         };
//     }

    

    
// }