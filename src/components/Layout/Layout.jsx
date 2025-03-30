import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftMenu from "./LeftMenu/LeftMenu.jsx";
import { LayoutContainer } from "./Layout.js";
import TopMenu from "./TopMenu/TopMenu.jsx";

const Layout = () => {

    const [leftMenuVisible , setLeftMenuVisible] = useState(true);
    const [title ,setTitle] = useState("Dashboard");

    const toggleLeftMenu = () => {
        console.log(leftMenuVisible);
        setLeftMenuVisible(!leftMenuVisible);
    }
    
    const handleTitle = (propTitle) => {
        setTitle(propTitle)
    }


    return <LayoutContainer $visibility={leftMenuVisible}>
                <LeftMenu visibility={leftMenuVisible} handleTitle={ (props) => handleTitle(props)}/>
                <TopMenu toggle={toggleLeftMenu} pagetitle={title}/>
                <Outlet />
            </LayoutContainer>;
};

export default Layout;