import React, { useState } from "react";
import { LeftContainer , UserPortrait, Correo } from "./LeftMenu.js";
import Logo from "../Logo.jsx";
import { Button } from "../../common/Buttons.js";
import NavList from "../NavList.jsx";
import { UnorderedList } from "../../common/Tables/Table.js";
import { Portrait } from "../../common/commonStyles.js";

const LeftMenu  = ({visibility, handleTitle}) => {


    const [active , setActive] = useState("Dashboard");

    const changeActive = ( elementName) => {
        setActive(elementName);
        handleTitle(elementName);
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
                <Portrait $size={"4rem"}/>
                <h4>Juan Luis Ávila Cervera</h4>
                <Correo>{"juanluisavilacervera44@gmail.com".slice(0,15)}</Correo>
                <Correo>{"juanluisavilacervera44@gmail.com".slice(15)}</Correo>

                <Button type={"secondary"}>Edit</Button>
            </UserPortrait>
        </LeftContainer>
        
    );
}

export default LeftMenu;