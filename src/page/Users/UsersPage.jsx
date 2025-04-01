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
    const [users, setUsers] = useState([{}])
    const [data , setData] = useState(users);

    const dispatch = useDispatch();

    const usersData = useSelector(getUsersData);
    const usersStatus = useSelector(getUsersStatus);

    useEffect( () => {
        if(!usersStatus){
            dispatch(UserThunk());
        }else if(usersStatus === 'fulfilled'){
            setUsers(usersData)
        }else if(usersStatus === 'rejected'){
            console.log("Error loading users")
        }
    }, [dispatch, usersStatus])

    useEffect(() => {
        setData(users);
    }, [users])

    const filterActive = (value) => {
        return users.filter((user) => user.active === value) || [];
    }

    const changeActive = (listName) => {
            setActive(listName);
            switch(listName){
                case "all":
                    setData(users);
                    break;
                case "active":
                    setData(filterActive(true));
                    break;
                case "inactive":
                    setData(filterActive(false));
                    break;
                default:
                    setData(users);
                    break;
            }
        }


    useEffect(() => { handleOrder()}, [order, active])

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
                   
                
                <Table data={data}/>
            </Page>;
}
export default UsersPage;