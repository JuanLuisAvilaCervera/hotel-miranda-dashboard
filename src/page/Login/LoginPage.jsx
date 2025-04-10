import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { LoginBody, LoginContainer, LoginInput } from "./login";
import { Button, InputButton } from "../../components/common/Buttons";
import Logo from "../../components/Layout/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData, getLoginStatus } from "./LoginSlice";
import LogInThunk, { getLogin } from "./LoginThunk";

const LoginPage = () => {

    const [user , setUser ] = useState('');
    const [password , setPassword] = useState('');

    const [login , setLogin] = useState("");

    const dispatch = useDispatch();

    const loginStatus = useSelector(getLoginStatus);
    const loginData = useSelector(getLoginData);


    useEffect( () => {
        if(loginStatus === "idle"){
            dispatch(getLogin());
        }else if(loginStatus === "fulfilled"){

            if(loginData !== '' && loginData != null){
                localStorage.setItem('login', loginData)
                setLogin(true)
            }else{
                setLogin("")
            }

        }else if(loginStatus === "rejected"){
            console.log("Error loading bookings")
        }
    }, [dispatch , loginStatus , loginData])
    

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if(user !== '' && password !== ''){
            dispatch(LogInThunk({user , password}))
            if(loginStatus === 'fulfilled'){
                setLogin(localStorage.getItem('login'))
            }
        }
    }
   

    
    return login !== "" ? 
    <>
        <Navigate to="/dashboard"/>
    </> : <>
        <LoginBody>
            <Logo/>
            <LoginContainer>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label>
                        Username:
                        <LoginInput type="text" onChange={(e)=> setUser(e.target.value)} required/>
                    </label>
                    <label>
                        Password:
                        <LoginInput type="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    <InputButton type="submit" value="Log In"/>
                </form>
                
            </LoginContainer>
            
        </LoginBody>
    </>
    ;
}

export default LoginPage;