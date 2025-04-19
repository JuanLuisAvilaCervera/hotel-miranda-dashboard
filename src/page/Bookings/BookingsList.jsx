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
    const [data , setData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bookingsData = useSelector(getBookingsData);
    const bookingsStatus = useSelector(getBookingsStatus);

    useEffect( () => {
        if(bookingsStatus === "idle"){
            dispatch(BookingsThunk());
        }else if(bookingsStatus === "fulfilled"){
            setData(bookingsData)
        }else if(bookingsStatus === "rejected"){
            console.log("Error loading bookings")
        }
    }, [dispatch , bookingsStatus , bookingsData])


    const filterBooking = (listFilter) => {
        return bookingsData.filter((booking) => booking.status === listFilter ) || [];
    }



    const changeActive = (listName) => {
        setActive(listName);
            switch(listName){
                case "all":
                    setData(bookingsData);
                    break;
                case "checkin":
                    setData(filterBooking("Check In"));
                    break;
                case "checkout":
                    setData(filterBooking("Check Out"))
                    break;
                case "progress":
                    setData(filterBooking("In Progress"));
                    break;
                default:
                    setData(users);
                    break;
            }
        
    }

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
                    return a.client_id - b.client_id; // CHANGE
                default:
                    return 0;
            }
        }));
    }

    useEffect(() => { handleOrder()}, [order, active])



    return <Page>
            <TableNav $justify={"space-between"}>
            <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () =>changeActive("all")}>All Bookings</NavList>
                <NavList $active={active === "checkin" ? "active" : ""} onClick = {  () => changeActive("checkin")}>Checking In</NavList>
                <NavList $active={active === "checkout" ? "active" : ""}  onClick = {  () => changeActive("checkout")}>Checking Out</NavList>
                <NavList $active={active === "progress" ? "active" : ""} onClick = {  () => changeActive("progress")}>In Progress</NavList>
            </UnorderedList>
            <Button onClick={ () => navigate("/newbookings")}>Add Booking</Button>
            <OrderSelectDiv>
                    <OrderSelect
                value={order}
                onChange={(e) => {setOrder(e.target.value)}}>
                <option value="order_date"> Newest </option>
                <option value="check_in_date"> Check In </option>
                <option value="check_out_date"> Check Out </option>
                <option value="guest"> Guest </option>
                </OrderSelect>
            </OrderSelectDiv>
            </TableNav>
            
            {data.length > 0 ? <Table data={data} dataType={"bookings"}/> : <h1>Loading...</h1>}
            </Page>;
}

export default BookingsPage;