import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.styles";
import Table from "../../components/common/Tables/Table.jsx";
import Users from "./Users.json";
import { UnorderedList } from "../../components/common/Tables/Table.style.js";
import { NavList } from "../../components/common/Tables/Table.style.js";

const UsersPage = () => {

    const [data , setData] = useState(Users);
    const [order , setOrder] = useState("start_date");
    const [active, setActive] = useState("all")

    const filterActive = (value) => {
        return Users.filter((user) => user.active === value) || [];
    }

    const changeActive = (listName) => {
            setActive(listName);
            switch(listName){
                case "all":
                    setData(Users);
                    break;
                case "active":
                    setData(filterActive(true));
                    break;
                case "inactive":
                    setData(filterActive(false));
                    break;
                default:
                    setData(Users);
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
                <UnorderedList>
                    <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Employees</NavList>
                    <NavList $active={active === "active" ? "active" : ""} onClick = {  () => changeActive("active")}>Active Employees</NavList>
                    <NavList $active={active === "inactive" ? "active" : ""}  onClick = {  () => changeActive("inactive")}>Inactive Employees</NavList>
                </UnorderedList>    
                <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}>
                    <option value="start_date"> Starting Date </option>
                    <option value="last_name"> Alphabetical </option>
                </select>
                <Table data={data}/>
            </Page>;
}
export default UsersPage;