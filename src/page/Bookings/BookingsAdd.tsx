import React, { ChangeEvent, useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import { Button, InputButton } from "../../components/common/Buttons";
import { FormElement, FormInput, FormTextArea } from "../../components/common/Forms/Form";
import { SubmitTarget, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddBookingsThunk } from "./BookingThunk";
import { getBookingsData, getBookingsStatus } from "./BookingSlice";
import Booking from "../../interfaces/bookingInterface";
import { AppDispatch } from "../../app/store";

export const BookingsAdd = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const bookingsData = useSelector(getBookingsData);
    const bookingsStatus = useSelector(getBookingsStatus);

    
    const curr = new Date();

    interface NewBooking{
        booking_id : number,
        room_id : number,
        client_id : number,
        order_date: Date,
        check_in_date : Date | null,
        check_out_date: Date | null,
        status: 'In Progress' | 'Check In' | 'Check Out',
        special_request: string
    }

    const [newBooking , setBooking] = useState<NewBooking>({
        booking_id : bookingsData.length + 1,
        room_id : bookingsData.length +1,
        client_id : bookingsData.length + 1,
        order_date: new Date(),
        check_in_date : null,
        check_out_date: null,
        status: 'In Progress',
        special_request: ''
    })

    const handleSubmit = (event : SubmitEvent) => {
        event.preventDefault();
        if(newBooking.check_in_date && newBooking.check_out_date && newBooking.check_in_date < newBooking.check_out_date){
            //create new Booking.
            const booking : Booking = {
                booking_id : newBooking.booking_id,
                client_id : newBooking.client_id,
                order_date : newBooking.order_date,
                check_in_date : newBooking.check_in_date,
                check_out_date : newBooking.check_out_date,
                status : newBooking.status,
                special_request : newBooking.special_request
            }
            dispatch(AddBookingsThunk(booking))
            if(bookingsStatus === 'fulfilled'){
                navigate("/bookings");
            }
        }
        
    }

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name;
        const date = new Date(event.target.value)
        const value =  date;
        setBooking({...newBooking, [name] : value});
        // const formatedDate = (date.getMonth()) + '/' + (date.getDate()) + '/' + (date.getFullYear());

    }

    const handleRequest = (event : ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value =  event.target.value;
        setBooking({...newBooking, [name] : value});
    }

    // useEffect(() => console.log(newBooking), [newBooking])

    return <Page $alignment="">
        <FormElement>
            <h1>Add New Booking</h1>
            <label> Check In</label>
            <FormInput name="check_in_date" type="date"  onChange={handleChange}/>
            <label> Check Out</label>
            <FormInput name="check_out_date" type="date"  onChange={handleChange}/>
            <label>Special Request</label>
            <FormTextArea name="special_request" onChange={ (e:ChangeEvent<HTMLTextAreaElement>) => handleRequest(e)}/>
            <div>
                <InputButton type="submit" name="Add New Booking" $backgroundcolor=""/>
                <Button onClick={ () => navigate("/bookings")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            </div>
            
        </FormElement>
    </Page>
}