import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
import Table from "../../components/common/Tables/Table.jsx";
// import Users from "./Users.json";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList } from "../../components/common/Tables/Table.js";
import { NavList } from "../../components/common/Tables/Table.js";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData, getUsersStatus } from "./UserSlice.js";
import UserThunk from "./UserThunk.js";

const UsersPage = () => {

    const [order , setOrder] = useState("start_date");
    const [active, setActive] = useState("all")
    const [data , setData] = useState([]);

    const dispatch = useDispatch();

    const usersData = useSelector(getUsersData);
    const usersStatus = useSelector(getUsersStatus);

    useEffect( () => {
        if(usersStatus === "idle"){
            dispatch(UserThunk());
        }else if(usersStatus === 'fulfilled'){
            setData(usersData)
        }else if(usersStatus === 'rejected'){
            console.log("Error loading users")
        }
    }, [dispatch, usersStatus])


    const filterActive = (value) => {
        return usersData.filter((user) => user.active === value) || [];
    }

    const changeActive = (listName) => {
            setActive(listName);
            switch(listName){
                case "all":
                    setData(usersData);
                    break;
                case "active":
                    setData(filterActive(true));
                    break;
                case "inactive":
                    setData(filterActive(false));
                    break;
                default:
                    setData(usersData);
                    break;
            }
        }

    const handleOrder = () => {
        setData([...data].sort((a,b) => {

            switch(order){
                case "start_date":

                    return new Date(b.start_date) - new Date(b.start_date);
                case "last_name":
                    
                    return (b.last_name) - (a.last_name);
                default:
                    return 0;
            }
        }));
    }

    useEffect(() => { handleOrder()}, [order, active])

    return <Page>
            <TableNav $justify={"space-between"}>
                <UnorderedList>
                    <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Employees</NavList>
                    <NavList $active={active === "active" ? "active" : ""} onClick = {  () => changeActive("active")}>Active Employees</NavList>
                    <NavList $active={active === "inactive" ? "active" : ""}  onClick = {  () => changeActive("inactive")}>Inactive Employees</NavList>
                </UnorderedList>
                <OrderSelectDiv>
                    <OrderSelect
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}>
                        <option value="start_date"> Starting Date </option>
                        <option value="last_name"> Alphabetical </option>
                    </OrderSelect>
                </OrderSelectDiv>
            </TableNav>
                   
                
            {data.length > 0 ? <Table data={data} dataType={"bookings"}/> : <h1>Loading...</h1>}

            </Page>;
}
export default UsersPage;