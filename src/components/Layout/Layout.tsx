import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { LayoutContainer } from "./LayoutStyle";
import TopMenu from "./TopMenu/TopMenu";
import LeftMenu from "./LeftMenu/LeftMenu";
import { useAuth } from "../../page/Login/useAuth";
import LoginPage from "../../page/Login/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getLoginData, getLoginStatus } from "../../page/Login/LoginSlice";
import { LogOut } from "../../page/Login/LoginThunk";



const Layout = () => {

    const [leftMenuVisible , setLeftMenuVisible] = useState(true);

    const initialTitle : string = String(window.location.pathname).charAt(1).toUpperCase() + String(window.location.pathname).slice(2);

    const [title ,setTitle] = useState(initialTitle);

    const dispatch = useDispatch<AppDispatch>();
    const {logged , logout : contextLogout , login : contextLogin }= useAuth();
    
    const loginStatus = useSelector(getLoginStatus);
    const loginData = useSelector(getLoginData);
    
    
    const handleLogout = () => {
        dispatch(LogOut());
    }

    useEffect( () => {

        const storedToken = localStorage.getItem('token');
        if(loginStatus === "fulfilled")
        if(storedToken !== null){
            contextLogin(storedToken)
        }else{
            contextLogout();
        }

    }, [dispatch, loginStatus , loginData])


    const toggleLeftMenu = () => {
        setLeftMenuVisible(!leftMenuVisible);
    }
    
    const handleTitle = (propTitle : string) => {
        setTitle(propTitle)
    }


    return(
        !logged ?
            <LoginPage/>
        :
            <LayoutContainer $visibility={leftMenuVisible}>
                <LeftMenu visibility={leftMenuVisible} handleTitle={ (props : string) => handleTitle(props)}/>
                <TopMenu toggle={toggleLeftMenu} pagetitle={title} handleLogout={handleLogout}/>
                <Outlet />
            </LayoutContainer>
    )
    
    
};

export default Layout;