import React, { ChangeEvent, FormEvent, FormEventHandler, FormHTMLAttributes, HTMLInputAutoCompleteAttribute, useState } from "react";
import { Page } from "../../components/common/page";
import { Button, InputButton } from "../../components/common/Buttons";
import { FormElement, FormInput, FormTextArea } from "../../components/common/Forms/Form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsStatus } from "./BookingSlice";
import { UpdateBookingThunk } from "./BookingThunk";
import { MDYtoYMD, YMDtoMDY } from "../../global/dateFormating";
import Booking from "../../interfaces/bookingInterface";
import { AppDispatch } from "../../app/store";


export const BookingUpdate = () => {

    const booking = JSON.parse(localStorage.getItem('selectedBooking') || "")

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const bookingsStatus = useSelector(getBookingsStatus);

    const [updateBooking , setBooking] = useState<Booking>({
        booking_id : booking.booking_id,
        room_id : booking.room_id,
        client_id : booking.client_id,
        order_date: booking.order_date,
        check_in_date : booking.check_in_date,
        check_out_date: booking.check_out_date,
        status: booking.status,
        special_request: booking.special_request
    })

    
    // console.log(bookingsStatus);
    // console.log(updateBooking);
            // console.log(bookingsStatus);

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(updateBooking.check_in_date && updateBooking.check_out_date && MDYtoYMD(updateBooking.check_in_date) < MDYtoYMD(updateBooking.check_out_date) ){
            dispatch(UpdateBookingThunk(updateBooking))
            if(bookingsStatus === 'fulfilled'){
                navigate("/bookingsdetail");
            }
        }else{
            alert("Error: Fields are not completed or Check Out date is previous to Check In date")
        }
        
    }
    

    const handleChange = (event :  ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name;

        let value = "";
        switch(event.target.type){
            case "date":
                value = YMDtoMDY(new Date(event.target.value));
                break;
            case "number":
                console.log(event.target.value)
                !isNaN(parseInt(event.target.value)) && parseInt(event.target.value) != 0 ? value = event.target.value : value = "";
                break;
            default:
                value = event.target.value;
                break;
        }

        setBooking({...updateBooking, [name] : value});
    }

    const handleRequest = (event : ChangeEvent<HTMLTextAreaElement>) => {
            const name = event.target.name;
            const value =  event.target.value;
            setBooking({...updateBooking, [name] : value});
        }

    return <Page $alignment="">
        <FormElement onSubmit={handleSubmit}>
            <h1>Modify Booking {booking.booking_id}</h1>
            <label>Room</label><FormInput name="room_id" type="number" onChange={handleChange} value={updateBooking.room_id}/>
            <label>Client</label><FormInput name="client_id" type="number" onChange={handleChange}  value={updateBooking.client_id}/>
            <label> Check In</label>
            <FormInput name="check_in_date" type="date"  onChange={handleChange} value={MDYtoYMD(updateBooking.check_in_date)} />
            <label> Check Out</label>
            <FormInput name="check_out_date" type="date"  onChange={handleChange} value={MDYtoYMD(updateBooking.check_out_date)}/>
            <label>Special Request</label>
            <FormTextArea name="special_request" onChange={(e:ChangeEvent<HTMLTextAreaElement>) => handleRequest(e)} value={updateBooking.special_request}/>
            <div>
                <InputButton $backgroundcolor="" type="submit" name="Update Booking" />
                <Button onClick={ () => navigate("/bookings")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            </div>
            
        </FormElement>
    </Page>
}