import React, { useState } from "react";
import { LeftContainer , UserPortrait, Portrait, Correo } from "./LeftMenu.js";
import Logo from "../Logo.jsx";
import { Button } from "../../common/Button.js";
import NavList from "../NavList.jsx";
import { UnorderedList } from "../../common/Tables/Table.js";

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
                <Correo>{"juanluisavilacervera44@gmail.com".slice(0,15)}</Correo>
                <Correo>{"juanluisavilacervera44@gmail.com".slice(15)}</Correo>

                <Button $backgroundcolor={bg} type={"secondary"}>Edit</Button>
            </UserPortrait>
        </LeftContainer>
        
    );
}

export default LeftMenu;