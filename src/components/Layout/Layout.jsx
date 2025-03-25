import React from "react";
import { Outlet } from "react-router";
import LeftMenu from "./LeftMenu.jsx";
import { LayoutContainer } from "./Layout.styles.js";

const Layout = () => {

    return <LayoutContainer>
                <LeftMenu/>
                <Outlet />
            </LayoutContainer>;
};

export default Layout;