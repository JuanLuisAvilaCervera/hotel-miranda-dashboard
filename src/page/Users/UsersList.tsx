import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
// import Users from "./Users.json";
import { OrderSelect, OrderSelectDiv, TableNav, UnorderedList , NavList } from "../../components/common/Tables/Table.js";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData, getUsersStatus } from "./UserSlice.js";


import UserList from "./UserThunk.js";
import { AppDispatch } from "../../app/store.js";
import { MDYtoYMD } from "../../global/dateFormating.js";
import TableComponent from "../../components/common/Tables/TableComponent.js";
import { UserInterface } from "../../interfaces/userInterface.js";
import { Button } from "../../components/common/Buttons.js";
import { useNavigate } from "react-router";

const UsersPage = () => {


    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const usersData : UserInterface[] = useSelector(getUsersData);
    const usersStatus : string = useSelector(getUsersStatus);

    const [users, setUsers] = useState<UserInterface[]>(usersData)

    const [order , setOrder] = useState("start_date");
    const [active, setActive] = useState("all")
    

    const columns : ColumnInterface[] = [
        {
            name: "Profile",
            type: "profile",
            data: ["first_name" , "last_name" , "photo" , "_id"]
        },
        {
            name : "Start Date",
            type: "date",
            data: ["start_date"]
        },
        {
            name : "Email",
            type: "email",
            data: ["email"]
        },
        {
            name : "Job Description",
            type: "string",
            data: ["job_description"]
        },
        {
            name : "Contact",
            type: "phone",
            data: ["contact"]
        },
        {
            name : "Active",
            type: "toggle",
            data: ["active"]
        }
    ]

    useEffect( () => {

        if(usersStatus === "idle"){
            dispatch(UserList());
        }else if(usersStatus === 'fulfilled'){
            setUsers(usersData)
        }else if(usersStatus === 'rejected'){
            console.log("Error loading users")
        }
    }, [dispatch, usersStatus, usersData])

    const filterActive = (listFilter : boolean) => {
        return usersData.filter((user : UserInterface) =>
             user.active === listFilter) || [];
    }

    const changeActive = (listName : string) => {
            setActive(listName);
            switch(listName){
                case "all":
                    setUsers(usersData);
                    break;
                case "active":
                    setUsers(filterActive(true));
                    break;
                case "inactive":
                    setUsers(filterActive(false));
                    break;
                default:
                    setUsers(usersData);
                    break;
            }
        }


    useEffect(() => { handleOrder()}, [order, active])

    const handleOrder = () => {
        setUsers([...users].sort((a : UserInterface,b : UserInterface) => {
            switch(order){
                case "start_date":
                    return new Date(a.start_date).getTime() > new Date(b.start_date).getTime() ? 1 : -1 ;
                case "last_name":
                    return (b.last_name < a.last_name ? 1 : -1 );
                default:
                    return 0;
            }
        }));
    }

    const toggleActive = (value : boolean) => {
        dispatch()
    }
    

    return <Page $alignment="">
            <TableNav $justify={"space-between"}>
                <UnorderedList>
                    <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Employees</NavList>
                    <NavList $active={active === "active" ? "active" : ""} onClick = {  () => changeActive("active")}>Active Employees</NavList>
                    <NavList $active={active === "inactive" ? "active" : ""}  onClick = {  () => changeActive("inactive")}>Inactive Employees</NavList>
                </UnorderedList>
                <Button $backgroundcolor="" onClick={ () => navigate("/createuser")}>Add User</Button>
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
                    users.length > 0 ? <TableComponent data={users} columns={columns} toggle={toggleActive}/> : <h1>No users found</h1> 
                : <h1>Loading...</h1>
            }
            </Page>;
}
export default UsersPage;