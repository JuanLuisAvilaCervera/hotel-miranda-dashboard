import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.styles";
import Table from "../../components/common/Tables/Table.jsx";
import Contacts from "./Contacts.json";
import { UnorderedList } from "../../components/common/Tables/Table.style.js";
import { NavList } from "../../components/common/Tables/Table.style.js";

const ContactsPage = () => {

    const [active , setActive] = useState("all");
    const [data , setData] = useState(Contacts);
    const [order , setOrder] = useState("order_date");

    const filterArchived = () => {
        return Contacts.filter((contact) => contact.archived) || [];
    }

    const changeActive = (listName) => {
        setActive(listName);
        switch(listName){
            case "all":
                setData(Contacts);
                break;
            case "archived":
                setData(filterArchived());
        }
    }

    useEffect(() => { handleOrder()}, [order, active])

    const handleOrder = () => {
        setData([...data].sort((a,b) => {return new Date(b.comment_date) - new Date(a.comment_date);}));
    }


    return <Page>
            <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Bookings</NavList>
                <NavList $active={active === "archived" ? "active" : ""} onClick = {  () => changeActive("archived")}>Archived</NavList>
            </UnorderedList>
            <Table data={data}/>
            </Page>;
}

export default ContactsPage;