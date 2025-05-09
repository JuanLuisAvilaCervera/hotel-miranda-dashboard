import React, { useEffect, useState } from "react";
import { LoginBody, LoginContainer, LoginInput } from "./login";
import { InputButton } from "../../components/common/Buttons";
import Logo from "../../components/Layout/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData, getLoginStatus } from "./LoginSlice";
import LogInThunk from "./LoginThunk";
import { AppDispatch } from "../../app/store";
import { useAuth } from "./useAuth";



const LoginPage = () => {
    const [user , setUser ] = useState('');
    const [password , setPassword] = useState('');

    const token = localStorage.getItem('token');

    const {login : contextLogin } = useAuth();

    const dispatch = useDispatch<AppDispatch>();
    const loginData = useSelector(getLoginData);
    const loginstatus = useSelector(getLoginStatus);



    const handleSubmit = (event : React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(user !== '' && password !== ''){
            dispatch(LogInThunk({user , password}))
        }else{
            alert("Please  fill the username and password to Log In")
        }
    }

    useEffect( () => {

        if(loginstatus === "fulfilled"){
            if(loginData !== null){
                contextLogin(loginData);
            }
        }else if(token !== null){
            contextLogin(token)
        }



    }, [dispatch , loginstatus, token])
   

    
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