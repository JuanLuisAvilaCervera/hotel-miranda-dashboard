import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
import Table from "../../components/common/Tables/Table.jsx";
import { getRoomsData, getRoomsStatus } from "./RoomsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import RoomsThunk from "./RoomsThunk.js";
import { OrderSelect, OrderSelectDiv, TableNav } from "../../components/common/Tables/Table.js";

const RoomPage = () => {

    const [order , setOrder] = useState("room_id");
    const [rooms, setRooms] = useState([{}])
    const [data , setData] = useState(rooms);

    const dispatch = useDispatch();

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

    useEffect(() => setData(rooms), [rooms])
   

    useEffect(() => { handleOrder()}, [order])

    const handleOrder = () => {
        setData([...data].sort((a,b) => {


            switch(order){
                case "room_id":
                    return (a.room_id) - (b.room_id);
                case "price":
                    return (b.price) - (a.price);
                case "offer":
                    return (b.offer) - (a.offer);
                default:
                    return 0;
            }
        }));
    }


    return <Page>

            <TableNav $justify={"end"}>
                <OrderSelectDiv>
                    <OrderSelect
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}>
                        <option value="room_id"> Room Number </option>
                        <option value="price"> Price </option>
                        <option value="offer"> Available </option>
                    </OrderSelect>
                </OrderSelectDiv>
            </TableNav>
            <Table data={data}/>
            </Page>;
}
export default RoomPage;