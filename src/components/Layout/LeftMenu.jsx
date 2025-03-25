import React from "react";
import { NavList , UnorderedList , LeftContainer } from "./LeftMenu.styles.js";
import Logo from "./Logo";

const LeftMenu  = () => {


    return(
        <LeftContainer>
            <Logo/>
            <UnorderedList>
                <NavList>Bookings</NavList>
                <NavList>Rooms</NavList>
                <NavList>Contacts</NavList>
            </UnorderedList>
        </LeftContainer>
        
    );
}

export default LeftMenu;