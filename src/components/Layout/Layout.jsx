import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftMenu from "./LeftMenu/LeftMenu.jsx";
import { LayoutContainer } from "./Layout.js";
import TopMenu from "./TopMenu/TopMenu.jsx";

const Layout = () => {

    const [leftMenuVisible , setLeftMenuVisible] = useState(true);

    const toggleLeftMenu = () => {
        console.log(leftMenuVisible);
        setLeftMenuVisible(!leftMenuVisible);
    }


    return <LayoutContainer $visibility={leftMenuVisible}>
                <LeftMenu visibility={leftMenuVisible}/>
                <TopMenu toggle={toggleLeftMenu} pagetitle={"Dashboard"}/>
                <Outlet />
            </LayoutContainer>;
};

export default Layout;