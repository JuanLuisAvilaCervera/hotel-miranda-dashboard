import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import { Button, InputButton } from "../../components/common/Buttons";
import { FormElement, FormInput, FormTextArea } from "../../components/common/Forms/Form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddBookingsThunk } from "./BookingThunk";
import { getBookingsData, getBookingsStatus } from "./BookingSlice";

export const BookingsAdd = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bookingsData = useSelector(getBookingsData);
    const bookingsStatus = useSelector(getBookingsStatus);

    
    const curr = new Date();

    const [newBooking , setBooking] = useState({
        booking_id : bookingsData.length + 1,
        room_id : bookingsData.length +1,
        client_id : bookingsData.length + 1,
        order_date: (curr.getMonth() + 1) + '/' + (curr.getDate() ) + '/' + (curr.getFullYear()),
        check_in_date : null,
        check_out_date: null,
        status: 'Pending',
        special_request: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newBooking.check_in_date && newBooking.check_out_date && newBooking.check_in_date < newBooking.check_out_date){
            dispatch(AddBookingsThunk({newBooking}))
            if(bookingsStatus === 'fulfilled'){
                navigate("/bookings");
            }
        }
        
    }
    

    const handleChange = (event) => {

        const name = event.target.name;
        const date = new Date(event.target.value)
        const formatedDate = (date.getMonth()) + '/' + (date.getDate()) + '/' + (date.getFullYear());
        const value = event.target.type === "date" ? formatedDate : event.target.value;
        setBooking({...newBooking, [name] : value});
    }

    // useEffect(() => console.log(newBooking), [newBooking])

    return <Page>
        <FormElement onSubmit={handleSubmit}>
            <h1>Add New Booking</h1>
            <label> Check In</label>
            <FormInput name="check_in_date" type="date"  onChange={handleChange}/>
            <label> Check Out</label>
            <FormInput name="check_out_date" type="date"  onChange={handleChange}/>
            <label>Special Request</label>
            <FormTextArea name="special_request" onChange={handleChange}/>
            <div>
                <InputButton type="submit" name="Add New Booking" />
                <Button onClick={ () => navigate("/bookings")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            </div>
            
        </FormElement>
    </Page>
}