import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
import { getRoomsData, getRoomsStatus } from "./RoomsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import RoomsThunk from "./RoomsThunk.js";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList } from "../../components/common/Tables/Table.js";
import NavList from "../../components/Layout/NavList.js";
import { AppDispatch } from "../../app/store.js";
import { RoomInterface } from "../../interfaces/roomInterface.js";
import TableComponent from "../../components/common/Tables/TableComponent.js";

const RoomPage = () => {

    const [order , setOrder] = useState("room_id");
    const [rooms, setRooms] = useState([])

    const dispatch = useDispatch<AppDispatch>();

    const roomsData = useSelector(getRoomsData);
    const roomsStatus = useSelector(getRoomsStatus);

    useEffect( () => {
        if(roomsStatus === 'idle'){
            dispatch(RoomsThunk());
        }else if(roomsStatus === 'fulfilled'){
            setRooms(roomsData)
        }else if(roomsStatus === 'rejected'){
            console.log("Error loading rooms")
        }
    }, [dispatch, roomsStatus])

   

    useEffect(() => { handleOrder()}, [order])

    const handleOrder = () => {
        setRooms([...rooms].sort((a : RoomInterface,b : RoomInterface) => {


            switch(order){
                case "room_number":
                    return (a.room_number) - (b.room_number);
                case "price":
                    return (b.price) - (a.price);
                default:
                    return 0;
            }
        }));
    }


    return <Page $alignment="">
                <TableNav $justify={"space-between"}>
                        <OrderSelectDiv>
                            <OrderSelect
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}>
                                <option value="start_date"> Starting Date </option>
                                <option value="last_name"> Alphabetical </option>
                            </OrderSelect>
                        </OrderSelectDiv>
                    </TableNav>
                        
                        
                    {rooms.length > 0 || roomsStatus === "fulfilled" ?  
                            rooms.length > 0 ? <TableComponent data={rooms}/> : <h1>No rooms found</h1> 
                        : <h1>Loading...</h1>
                    }
            </Page>;
}
export default RoomPage;