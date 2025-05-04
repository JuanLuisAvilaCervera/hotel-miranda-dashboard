import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";



import { Burguer, MiddleSpace,  Title,  TopContainer } from "./TopMenuStyles";
import { IconContext } from "react-icons";
import { Navigate, useNavigate } from "react-router";

const TopMenu  = ({pagetitle , toggle} : {pagetitle : string , toggle : Function}) => {

    const navigate = useNavigate();

    const locallogin = localStorage.getItem('login');

    const [login , setLogin] = useState<boolean>(locallogin !== null && locallogin !== "" && locallogin !== undefined)

    const handleLogout = () => {
        console.log(login)
        localStorage.removeItem('login');
        setLogin(false)
    }


    return(
        !login ?
        <Navigate to={"/"}/>
        :
        <TopContainer>
            <Burguer onClick={() => {toggle()}}/>
            <Title>{pagetitle}</Title>
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
                <div id="logout" onClick={() => handleLogout()}>
                    <CiLogout/>
                </div>
            </IconContext.Provider>
        </TopContainer>
        
    );
}

export default TopMenu;