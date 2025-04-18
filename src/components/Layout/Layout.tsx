import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftMenu from "./LeftMenu/LeftMenu.tsx";
import { LayoutContainer } from "./Layout.ts";
import TopMenu from "./TopMenu/TopMenu.tsx";

const Layout = () => {

    const [leftMenuVisible , setLeftMenuVisible] = useState(true);
    const [title ,setTitle] = useState("Dashboard");

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