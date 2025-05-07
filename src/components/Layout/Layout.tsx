import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { LayoutContainer } from "./LayoutStyle";
import TopMenu from "./TopMenu/TopMenu";
import LeftMenu from "./LeftMenu/LeftMenu";
import { useAuth } from "../../page/Login/useAuth";


const Layout = () => {

    const { logged  , logout , login } = useAuth();

    const [leftMenuVisible , setLeftMenuVisible] = useState(true);
    const [title ,setTitle] = useState("Dashboard");

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const logged = localStorage.getItem('logged') === 'true';

        if(logged && storedToken !== null && storedToken !== "" && storedToken !== undefined){
            login(storedToken);
        }else{
            logout();
        }
    }, [logged , login , logout])


    const toggleLeftMenu = () => {
        setLeftMenuVisible(!leftMenuVisible);
    }
    
    const handleTitle = (propTitle : string) => {
        setTitle(propTitle)
    }


    return <LayoutContainer $visibility={leftMenuVisible}>
                <LeftMenu visibility={leftMenuVisible} handleTitle={ (props : string) => handleTitle(props)}/>
                <TopMenu toggle={toggleLeftMenu} pagetitle={title}/>
                <Outlet />
            </LayoutContainer>;
};

export default Layout;