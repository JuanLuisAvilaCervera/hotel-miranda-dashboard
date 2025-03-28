import React, { useState } from "react";
import { LeftContainer , UserPortrait, Portrait } from "./LeftMenu.styles.js";
import Logo from "./Logo";
import { Button } from "./Button.js";
import NavList from "./NavList.jsx";
import { UnorderedList } from "../common/Tables/Table.style.js";

const LeftMenu  = ({visibility}) => {

    const bg = '#EBF1EF';

    const [active , setActive] = useState("Dashboard");

    const changeActive = ( elementName) => {
        setActive(elementName);
    }

    return(
        <LeftContainer $visibility={visibility}>
            <Logo/>
            <UnorderedList>
                <NavList page={"/"} content={"Dashboard"} active={active === "Dashboard" ? "active" : ""} activate={() => changeActive("Dashboard")}/>
                <NavList page={"/rooms"} content={"Room"} active={active === "Room" ? "active" : ""} activate={() => changeActive("Room")}/>
                <NavList page={"/bookings"} content={"Bookings"} active={active === "Bookings" ? "active" : ""} activate={() => changeActive("Bookings")}/>
                <NavList page={"/contacts"} content={"Contacts"} active={active === "Contacts" ? "active" : ""} activate = { () => changeActive("Contacts")} />
                <NavList page={"/users"} content={"Users"} active={active === "Users" ? "active" : ""} activate = { () => changeActive("Users")}/>
            </UnorderedList>
            <UserPortrait>
                <Portrait/>
                <h4>Juan Luis Ávila Cervera</h4>
                <h5>juanluisavilacervera44@gmail.com</h5>
                <Button $backgroundcolor={bg} type={"secondary"}>Contact</Button>
            </UserPortrait>
        </LeftContainer>
        
    );
}

export default LeftMenu;