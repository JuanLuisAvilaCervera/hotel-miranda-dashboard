import React, { useState } from "react";
import { Navigate } from "react-router";
import { LoginContainer } from "./login";

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
        <LoginContainer>
            <h1>Login</h1>
            <button onClick={() => handleLogin("nombre y apellidos del usuario")}>Log In</button>
        </LoginContainer>
    </>
    ;
}

export default LoginPage;