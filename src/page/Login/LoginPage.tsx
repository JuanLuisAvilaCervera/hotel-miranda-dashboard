import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { LoginBody, LoginContainer, LoginInput } from "./login";
import { Button, InputButton } from "../../components/common/Buttons";
import Logo from "../../components/Layout/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData, getLoginStatus } from "./LoginSlice";
import LogInThunk, { getLogin } from "./LoginThunk";
import { AppDispatch } from "../../app/store";



const LoginPage = () => {


    const [user , setUser ] = useState('');
    const [password , setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();


    const handleSubmit = (event : React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(user !== '' && password !== ''){
            dispatch(LogInThunk({user , password}))
        }
    }
   

    
    return <>
        <LoginBody>
            <Logo/>
            <LoginContainer>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label>
                        Username:
                        <LoginInput type="text" name="username" onChange={(e)=> setUser(e.target.value)} required/>
                    </label>
                    <label>
                        Password:
                        <LoginInput type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    <InputButton $backgroundcolor="" type="submit" name="submit" value="Log In"/>
                </form>
                
            </LoginContainer>
            
        </LoginBody>
    </>
    ;
}

export default LoginPage;