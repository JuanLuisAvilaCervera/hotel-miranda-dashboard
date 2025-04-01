import React, { useState } from "react";
import { Navigate } from "react-router";

const LoginPage = () => {


    const [login , setLogin] = useState(localStorage.getItem('login'));

    const handleLogin = (props) => {
        localStorage.setItem('login', props);
        setLogin(props);
    }

    


    return login ? <Navigate to="/dashboard" /> : 
    <>
        <h1>Login</h1>
        <button onClick={() => handleLogin("nombre y apellidos del usuario")}>Log In</button>
    </>;
}

export default LoginPage;