import React, { useEffect, useState } from "react";
import burguer from "../../resources/img/Layout/burguer-menu.png";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";


import { Burguer, MiddleSpace,  TopContainer } from "./TopMenu.styles";
import { IconContext } from "react-icons";

const TopMenu  = ({pagetitle, toggle}) => {

    return(
        <TopContainer>
            <Burguer src={burguer} onClick={() => {toggle();}}/>
            <h1>{pagetitle}</h1>
            <MiddleSpace />
            <IconContext.Provider value={{size: "2rem"}}>
                <div>
                    <CiMail />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{size: "2rem"}}>
                <div>
                    <CiBellOn />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{size: "2rem"}}>
                <div>
                    <CiLogout />
                </div>
            </IconContext.Provider>
        </TopContainer>
        
    );
}

export default TopMenu;