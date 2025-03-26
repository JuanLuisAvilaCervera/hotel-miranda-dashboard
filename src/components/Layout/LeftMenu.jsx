import React from "react";
import { NavList , UnorderedList , LeftContainer , UserPortrait, Portrait, Button } from "./LeftMenu.styles.js";
import Logo from "./Logo";

const LeftMenu  = () => {


    return(
        <LeftContainer>
            <Logo/>
            <UnorderedList>
                <NavList>Dashboard</NavList>
                <NavList>Room</NavList>
                <NavList>Bookings</NavList>
                <NavList>Guest</NavList>
                <NavList>Concierge</NavList>
            </UnorderedList>
            <UserPortrait>
                <Portrait/>
                <h4>Juan Luis Ávila Cervera</h4>
                <h5>juanluisavilacervera44@gmail.com</h5>
                <Button>Contact</Button>
            </UserPortrait>
        </LeftContainer>
        
    );
}

export default LeftMenu;