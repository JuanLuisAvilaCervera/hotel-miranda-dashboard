import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";



import { Burguer, MiddleSpace,  Title,  TopContainer } from "./TopMenuStyles";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router";

const TopMenu  = ({pagetitle , toggle} : {pagetitle : string , toggle : Function}) => {

    const navigate = useNavigate();

    const [login , setLogin] = useState(localStorage.getItem('login'))

    const handleLogin = () => {
        
        localStorage.removeItem('login');

        setLogin("")
    }

    useEffect( () => {
        if(login === "" || login === null || login === undefined){
            localStorage.removeItem('login');
            navigate("/")
        }
    } , [login])

    return(
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
                <div id="logout" onClick={handleLogin}>
                    <CiLogout/>
                </div>
            </IconContext.Provider>
        </TopContainer>
        
    );
}

export default TopMenu;