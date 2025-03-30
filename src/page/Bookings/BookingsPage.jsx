import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import Table from "../../components/common/Tables/Table.jsx";
import Bookings from "./Bookings.json";
import { UnorderedList } from "../../components/common/Tables/Table.js";
import { NavList } from "../../components/common/Tables/Table.js";

const BookingsPage = () => {

    const [active , setActive] = useState("all");
    const [data , setData] = useState(Bookings);
    const [order , setOrder] = useState("order_date");

    const filterBooking = (listFilter) => {
        return Bookings.filter((booking) => booking.status === listFilter) || [];
    }

    const changeActive = (listName) => {
        setActive(listName);
        switch(listName){
            case "all":
                setData(Bookings);
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
                setData(Bookings);
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
            <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Bookings</NavList>
                <NavList $active={active === "checkin" ? "active" : ""} onClick = {  () => changeActive("checkin")}>Checking In</NavList>
                <NavList $active={active === "checkout" ? "active" : ""}  onClick = {  () => changeActive("checkout")}>Checking Out</NavList>
                <NavList $active={active === "progress" ? "active" : ""} onClick = {  () => changeActive("progress")}>In Progress</NavList>
            </UnorderedList>

            <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}>
                <option value="order_date"> Newest </option>
                <option value="check_in_date"> Check In </option>
                <option value="check_out_date"> Check Out </option>
                <option value="guest"> Guest </option>
            </select>

            
            <Table data={data}/>
            </Page>;
}

export default BookingsPage;