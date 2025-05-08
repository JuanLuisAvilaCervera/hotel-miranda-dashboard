import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList } from "../../components/common/Tables/Table.js";
import { NavList } from "../../components/common/Tables/Table.js";
import { useDispatch, useSelector } from "react-redux";
import BookingsThunk from "./BookingThunk.js";
import { Button } from "../../components/common/Buttons.js";
import { useNavigate } from "react-router";
import { AppDispatch, RootState, useAppSelector } from "../../app/store.js";
import Booking from "../../interfaces/bookingInterface.js";
import { getBookingsData, getBookingsStatus } from "./BookingSlice.js";
import TableComponent from "../../components/common/Tables/TableComponent.js";
import { YMDtoMDY , MDYtoYMD } from "../../global/dateFormating.js";



const BookingsPage = () => {

    const [active , setActive] = useState("all");
    const [order , setOrder] = useState("order_date");
    const [bookingList , setList] = useState<Booking[]>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const bookingsData : Booking[] = useAppSelector(getBookingsData);
    const bookingsStatus : string = useAppSelector(getBookingsStatus);

    useEffect( () => {
        if(bookingsStatus === "idle"){
            dispatch(BookingsThunk());
        }else if(bookingsStatus === "fulfilled"){
            setList(bookingsData)
        }else if(bookingsStatus === "rejected"){
            console.log("Error loading bookings")
        }
    }, [dispatch , bookingsStatus , bookingsData])

    

    const filterBooking = (listFilter : string) => {
        return bookingsData.filter((booking : Booking) => 
            booking.status === listFilter ) || []
    }


    const changeActive = (listName : string) => {
        setActive(listName);
            switch(listName){
                case "all":
                    setList(bookingsData);
                    break;
                case "checkin":
                    setList(filterBooking("Check In"));
                    break;
                case "checkout":
                    setList(filterBooking("Check Out"))
                    break;
                case "progress":
                    setList(filterBooking("In Progress"));
                    break;
                default:
                    setList(bookingsData);
                    break;
            }
        
    }

    const handleOrder = () => {
        setList([...bookingList].sort((a : Booking,b : Booking) => {


            switch(order){
                case "order_date":
                    return Number(new Date(MDYtoYMD(b.order_date))) - Number(new Date(MDYtoYMD(a.order_date)));
                case "check_in_date":
                    return Number(new Date(MDYtoYMD(b.check_in_date))) - Number(new Date(MDYtoYMD(a.check_in_date)));
                case "check_out_date":
                    return Number(new Date(MDYtoYMD(b.check_out_date))) - Number(new Date(MDYtoYMD(a.check_out_date)));
                case "guest":
                    return a.client_id - b.client_id; // CHANGE
                default:
                    return 0;
            }
        }));
    }

   

    useEffect(() => { handleOrder() }, [order, active])


    return <Page $alignment="">
            <TableNav $justify={"space-between"}>
            <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () =>changeActive("all")}>All Bookings</NavList>
                <NavList $active={active === "checkin" ? "active" : ""} onClick = {  () => changeActive("checkin")}>Checking In</NavList>
                <NavList $active={active === "checkout" ? "active" : ""}  onClick = {  () => changeActive("checkout")}>Checking Out</NavList>
                <NavList $active={active === "progress" ? "active" : ""} onClick = {  () => changeActive("progress")}>In Progress</NavList>
            </UnorderedList>
            <Button $backgroundcolor="" onClick={ () => navigate("/newbookings")}>Add Booking</Button>
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
            
            {bookingList.length > 0 || bookingsStatus === "fulfilled" ? bookingList.length > 0 ? <TableComponent data={bookingList}/> : <h1>No bookings found</h1> : <h1>Loading...</h1>}
            </Page>;
}

export default BookingsPage;

