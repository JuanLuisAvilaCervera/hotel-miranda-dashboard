import React, { useState } from "react";
import {UnorderedList , LeftContainer , UserPortrait, Portrait } from "./LeftMenu.styles.js";
import Logo from "./Logo";
import { Button } from "./Button.js";
import NavList from "./NavList.jsx";

const LeftMenu  = ({visibility}) => {

    const bg = 'blue';

    const [active , setActive] = useState("Dashboard");

    const changeActive = ( elementName) => {
        console.log(elementName);
        setActive(elementName);
        console.log(active);
    }

    return(
        <LeftContainer $visibility={visibility}>
            <Logo/>
            <UnorderedList>
                <NavList page={"/"} content={"Dashboard"} active={active === "Dashboard" ? "active" : ""} activate={() => changeActive("Dashboard")}/>
                <NavList page={"/rooms"} content={"Room"} active={active === "Room" ? "active" : ""} activate={() => changeActive("Room")}/>
                <NavList page={"/bookings"} content={"Bookings"} active={active === "Bookings" ? "active" : ""} activate={() => changeActive("Bookings")}/>
                <NavList page={"/contacts"} content={"Guest"} active={active === "Guest" ? "active" : ""} activate = { () => changeActive("Guest")} />
                <NavList>Concierge</NavList>
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