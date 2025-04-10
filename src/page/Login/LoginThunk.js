import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(  resolve => setTimeout(resolve , ms));


const LogInThunk = createAsyncThunk("login/fetch", async ({user, password}) => 
    {
        await delay(200);

        if(user === "admin" && password === "admin"){
            localStorage.setItem('login', user)
            return user
        }else{
            return "";
        }
    }
)

export const getLogin = createAsyncThunk("login/getLogin", async() => {
    await delay(200);

    if(localStorage.getItem('login') !== ""){
        return localStorage.getItem('login')
    }else{
        return "";
    }
})

const LogOut = createAsyncThunk("login/logout", async({user}) => {
    await delay(200);
    localStorage.removeItem('login');
})

export default LogInThunk;