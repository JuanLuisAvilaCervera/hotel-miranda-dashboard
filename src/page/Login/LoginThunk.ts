import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(  resolve => setTimeout(resolve , ms));



const LogInThunk = createAsyncThunk<boolean , {user : string , password : string}>("login/fetch" , async ({user, password}) =>{
    await delay(200);

    if(user === "admin" && password == "admin"){

        localStorage.setItem('login', user);

        return true;
    }else{
        return false;
    }

});

export const getLogin = createAsyncThunk<boolean>("login/getLogin", async() => {
    await delay(200);

    let login = localStorage.getItem('login')

    if(typeof login === "string" && login !== ""){
        return true
    }else{
        return false;
    }
})

const LogOut = createAsyncThunk<string , {user : string}>("login/logout", async({user}) => {
    await delay(200);
    localStorage.removeItem('login');
    return user;
})

export default LogInThunk;