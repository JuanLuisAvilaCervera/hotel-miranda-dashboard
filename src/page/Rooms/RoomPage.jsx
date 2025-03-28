import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.styles";
import Table from "../../components/common/Tables/Table.jsx";
import Rooms from "./Rooms.json";
import { UnorderedList } from "../../components/common/Tables/Table.style.js";
import { NavList } from "../../components/common/Tables/Table.style.js";

const RoomPage = () => {

    const [data , setData] = useState(Rooms);
    const [order , setOrder] = useState("room_id");

   

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

            <div>

                    <select
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}>
                        <option value="room_id"> Room Number </option>
                        <option value="price"> Price </option>
                        <option value="offer"> Available </option>
                    </select>

            </div>
            <Table data={data}/>
            </Page>;
}
export default RoomPage;