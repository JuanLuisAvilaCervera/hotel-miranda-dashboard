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
    
    const storedLogin : any = localStorage.getItem('login')

    const [login , setLogin] = useState<boolean>(storedLogin === null || storedLogin === "" || storedLogin === undefined ? false : true );

    const dispatch = useDispatch<AppDispatch>();

    const loginStatus : string = useSelector(getLoginStatus);
    const loginData : boolean = useSelector(getLoginData);


    useEffect( () => {
        if(loginStatus === "idle"){
            dispatch(getLogin());
        }else if(loginStatus === "fulfilled"){
            console.log("Login : " + login)
            console.log("LoginData: " + loginData)

            if(loginData){
                localStorage.setItem('login', "true");
            }else{
                localStorage.removeItem('login');
            }
            setLogin(loginData)

        }else if(loginStatus === "rejected"){
            console.log("Error loading bookings")
        }
    }, [dispatch , loginStatus , loginData])
    

    const handleSubmit = (event : React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        
        if(user !== '' && password !== ''){
            dispatch(LogInThunk({user , password}))
            if(loginStatus === 'fulfilled'){
                setLogin(loginData)
            }
        }
    }
   

    
    return login === true ? 
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