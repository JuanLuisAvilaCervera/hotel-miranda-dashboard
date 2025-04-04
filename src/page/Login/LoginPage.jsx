import React, { useState } from "react";
import { Navigate } from "react-router";
import { LoginBody, LoginContainer, LoginInput } from "./login";
import { Button } from "../../components/common/Buttons";
import Logo from "../../components/Layout/Logo";

const LoginPage = () => {


    const [login , setLogin] = useState(localStorage.getItem('login') || "");

    const handleLogin = (props) => {
        
        localStorage.setItem('login', props);
        setLogin(props);
    }

   

    
    return login ? 
    <>
        <Navigate to="/dashboard"/>
    </> : <>
        <LoginBody>
            <Logo/>
            <LoginContainer>
                
                <h1>Login</h1>
                    <label>
                        Username:
                        <LoginInput type="text" />
                    </label>
                    <label>
                        Password:
                        <LoginInput type="password" />
                    </label>
                    <Button onClick={() => handleLogin("nombre y apellidos del usuario")}>Log In</Button>
            </LoginContainer>
            
        </LoginBody>
    </>
    ;
}

export default LoginPage;