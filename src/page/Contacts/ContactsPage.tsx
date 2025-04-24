import React, { useEffect, useState } from "react";
import { Page } from "../../components/common/page.js";
import TableComponent from "../../components/common/Tables/TableComponent.js";
import Contacts from "./Contacts.json";
import { UnorderedList } from "../../components/common/Tables/Table.js";
import { NavList } from "../../components/common/Tables/Table.js";
import Contact from "../../interfaces/contactInteface.js";

const ContactsPage = () => {

    // const [active , setActive] = useState("all");
    // const [contactList , setList] = useState<Contact[]>([]);
    // const [order , setOrder] = useState("order_date");

    // const filterArchived = () => {
    //     return Contacts.filter((contact) => contact.archived) || [];
    // }

    // const changeActive = (listName : string) => {
    //     setActive(listName);
    //     switch(listName){
    //         case "all":
    //             setList(Contacts);
    //             break;
    //         case "archived":
    //             setList(filterArchived());
    //         default:
    //             setList(Contacts);
    //             break;
    //     }
    // }

    // useEffect(() => { handleOrder()}, [order, active])

    // const handleOrder = () => {
    //     setList([...data].sort((a,b) => {return new Date(b.comment_date) - new Date(a.comment_date);}));
    // }


    return <Page $alignment="">
            {/* <UnorderedList>
                <NavList $active={active === "all" ? "active" : ""}  onClick = {  () => changeActive("all")}>All Contacts</NavList>
                <NavList $active={active === "archived" ? "active" : ""} onClick = {  () => changeActive("archived")}>Archived</NavList>
            </UnorderedList>
            {contacLis.length > 0 ? <TableComponent data={bookingList}/> : <h1>Loading...</h1>} */}
            </Page>;

}

export default ContactsPage;