import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import Table from "../../components/common/Tables/Table.jsx";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList } from "../../components/common/Tables/Table.js";
import { NavList } from "../../components/common/Tables/Table.js";
import { useDispatch, useSelector } from "react-redux";
import {  getBookingsData, getBookingsStatus } from "./BookingSlice.js";
import BookingsThunk from "./BookingThunk.js";
import { Button } from "../../components/common/Buttons.js";
import { useNavigate } from "react-router";

const BookingsPage = () => {

    const [active , setActive] = useState("all");
    const [order , setOrder] = useState("order_date");
    const [bookings , setBookings] = useState([{}])
    const [data , setData] = useState(bookings);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bookingsData = useSelector(getBookingsData);
    const bookingsStatus = useSelector(getBookingsStatus);

    useEffect( () => {
        if(!bookingsStatus){
            dispatch(BookingsThunk());
        }else if(bookingsStatus === "fulfilled"){
            setBookings(bookingsData)
            console.log(bookingsData)
        }else if(bookingsStatus === "rejected"){
            console.log("Error loading bookings")
        }
    }, [dispatch , bookingsStatus , bookingsData])

    useEffect(() => setData(bookings), [bookings])

    const filterBooking = (listFilter) => bookings.filter((booking) => booking.status === listFilter || []);

    const changeActive = (listName) => {
        setActive(listName);
        switch(listName){
            case "all":
                setData(bookings);
                break;
            case "checkin":
                setData(filterBooking("Check In"));
                break;
            case "checkout":
                setData(filterBooking("Check Out"));
                break;
            case "progress":
                setData(filterBooking("In Progress"));
                break;
            default:
                setData(bookings);
                break;
        }
    }

    useEffect(() => { handleOrder()}, [order, active])

    const handleOrder = () => {
        setData([...data].sort((a,b) => {


            switch(order){
                case "order_date":
                    return new Date(b.order_date) - new Date(a.order_date);
                case "check_in_date":
                    return new Date(b.check_in_date) - new Date(a.check_in_date);
                case "check_out_date":
                    return new Date(b.check_out_date) - new Date(a.check_out_date);
                case "guest":
                    return 0; // CHANGE
                default:
                    return 0;
            }
        }));
    }


    return <Page>
            <TableNav $justify={"space-between"}>
            <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Bookings</NavList>
                <NavList $active={active === "checkin" ? "active" : ""} onClick = {  () => changeActive("checkin")}>Checking In</NavList>
                <NavList $active={active === "checkout" ? "active" : ""}  onClick = {  () => changeActive("checkout")}>Checking Out</NavList>
                <NavList $active={active === "progress" ? "active" : ""} onClick = {  () => changeActive("progress")}>In Progress</NavList>
            </UnorderedList>
            <Button onClick={ () => navigate("/newbookings")}>Add Booking</Button>
            <OrderSelectDiv>
                    <OrderSelect
                value={order}
                onChange={(e) => setOrder(e.target.value)}>
                <option value="order_date"> Newest </option>
                <option value="check_in_date"> Check In </option>
                <option value="check_out_date"> Check Out </option>
                <option value="guest"> Guest </option>
                </OrderSelect>
            </OrderSelectDiv>
            </TableNav>
            
            <Table data={data}/>
            </Page>;
}

export default BookingsPage;