import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import { Button, InputButton } from "../../components/common/Buttons";
import { FormElement, FormInput, FormTextArea } from "../../components/common/Forms/Form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddBookingsThunk } from "./BookingThunk";
import { getBookingsData, getBookingsStatus } from "./BookingSlice";

export const BookingUpdate = () => {

    const booking = JSON.parse(localStorage.getItem('selectedBooking'))

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bookingsData = useSelector(getBookingsData);
    const bookingsStatus = useSelector(getBookingsStatus);

    
    const curr = new Date();

    const [newBooking , setBooking] = useState({
        booking_id : booking.booking_id,
        room_id : booking.room_id,
        client_id : booking.client_id,
        order_date: booking.order_date,
        check_in_date : booking.check_in_date,
        check_out_date: booking.check_out_date,
        status: booking.status,
        special_request: booking.special_request
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
    
    const YMDtoDMY  = (YMD) => {

        return  YMD.getMonth() +"/" + YMD.getDate() +"/" +  YMD.getFullYear();

    }

    const DMYtoYMD = (DMY) => {
        console.log(DMY.substr(0,2))
        console.log(DMY.substr(0,2).includes("/"))
        if(!DMY.substr(0,2).includes("/")){
            console.log(isNaN(parseInt(DMY.substr(0,2))))
            console.log(DMY.substr(6)+"-"+DMY.substr(3,2) +"-" + DMY.substr(0,2));
            return new Date(DMY.substr(6)+"-"+DMY.substr(3,2) +"-" + DMY.substr(0,2))

        }else{
            console.log(DMY.substr(5)+"-"+DMY.substr(2,2) +"-0" + DMY.substr(0,1));
            return new Date(DMY.substr(5)+"-"+DMY.substr(2,2) +"-0" + DMY.substr(0,1))
        }

    }

    const handleChange = (event) => {

        const name = event.target.name;
        const date = new Date(event.target.value)
        const formatedDate = YMDtoDMY(date);
        const value = event.target.type === "date" ? formatedDate : event.target.value;
        setBooking({...newBooking, [name] : value});
    }

    // useEffect(() => console.log(newBooking), [newBooking])

    return <Page>
        <FormElement onSubmit={handleSubmit}>
            <h1>Modify Booking {booking.booking_id}</h1>
            <label>Room</label><FormInput name="room_id" type="number" onChange={handleChange} value={newBooking.room_id}/>
            <label>Client</label><FormInput name="client_id" type="number" onChange={handleChange}  value={newBooking.client_id}/>
            <label> Check In</label>
            <FormInput name="check_in_date" type="date"  onChange={handleChange} value={DMYtoYMD(newBooking.check_in_date)}/>
            <label> Check Out</label>
            <FormInput name="check_out_date" type="date"  onChange={handleChange} value={DMYtoYMD(newBooking.check_out_date)}/>
            <label>Special Request</label>
            <FormTextArea name="special_request" onChange={handleChange} value={newBooking.special_request}/>
            <div>
                <InputButton type="submit" name="Add New Booking" />
                <Button onClick={ () => navigate("/bookings")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            </div>
            
        </FormElement>
    </Page>
}