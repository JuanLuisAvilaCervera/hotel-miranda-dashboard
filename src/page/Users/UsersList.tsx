import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
// import Users from "./Users.json";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList , NavList } from "../../components/common/Tables/Table.js";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData, getUsersStatus } from "./UserSlice.js";

import User from "../../interfaces/userInterface.js";
import UsersThunk from "./UserThunk.js";
import { AppDispatch } from "../../app/store.js";
import { MDYtoYMD } from "../../global/dateFormating.js";
import TableComponent from "../../components/common/Tables/TableComponent.js";

const UsersPage = () => {
    

    const [order , setOrder] = useState("start_date");
    const [active, setActive] = useState("all")
    const [users, setUsers] = useState<User[]>([])

    const dispatch = useDispatch<AppDispatch>();

    const usersData : User[] = useSelector(getUsersData);
    const usersStatus : string = useSelector(getUsersStatus);

    useEffect( () => {
        if(usersStatus === "idle"){
            dispatch(UsersThunk());
        }else if(usersStatus === 'fulfilled'){
            setUsers(usersData)
        }else if(usersStatus === 'rejected'){
            console.log("Error loading users")
        }
    }, [dispatch, usersStatus])


    const filterActive = (listFilter : boolean) => {
        return usersData.filter((user : User) =>
             user.active === listFilter) || [];
    }

    const changeActive = (listName : string) => {
            setActive(listName);
            switch(listName){
                case "all":
                    setUsers(users);
                    break;
                case "active":
                    setUsers(filterActive(true));
                    break;
                case "inactive":
                    setUsers(filterActive(false));
                    break;
                default:
                    setUsers(users);
                    break;
            }
        }


    useEffect(() => { handleOrder()}, [order, active])

    const handleOrder = () => {
        setUsers([...users].sort((a : User,b : User) => {

            switch(order){
                case "start_date":
                    Number(new Date(MDYtoYMD(b.start_date))) - Number(new Date(MDYtoYMD(a.start_date)));
                case "last_name":
                    return (b.last_name > a.last_name ? 1 : -1 );
                default:
                    return 0;
            }
        }));
    }


    return <Page $alignment="">
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
                   
                
            {users.length > 0 || usersStatus === "fulfilled" ?  
                    users.length > 0 ? <TableComponent data={users}/> : <h1>No bookings found</h1> 
                : <h1>Loading...</h1>
            }
            </Page>;
}
export default UsersPage;