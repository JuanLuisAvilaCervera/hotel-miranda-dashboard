import React from "react";
import { Outlet } from "react-router";

const Layout = () => {

    return <>
                <h1>Layout</h1>
                <Outlet />
            </>;
};

export default Layout;