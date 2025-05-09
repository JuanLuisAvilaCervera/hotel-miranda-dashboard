import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms : number) => new Promise(  resolve => setTimeout(resolve , ms));

const URI = "http://localhost:3000"

const LogInThunk = createAsyncThunk<string | null , {user : string , password : string}>("login/fetch" , async ({user, password}) =>{

    try{
        const response = await fetch(URI + "/login", {
            method: 'POST',
            headers: { "content-type" : "application/json;charset=UTF-8"},
            body: JSON.stringify({
                "username": user,
                "password": password,
            })
        })

        if(response.ok){
            const json = await response.json();
            localStorage.setItem('token' , json.token);
            return json;
        }else{
            return null;
        }


    }catch (error){


        let message
        if (error instanceof Error){
            message = error.message
            console.error(message)
            
        }else{ message = String(error)
            reportError({ message })

        }
        return null;
    }

    }
);

export const getLogin = createAsyncThunk<string | null>("login/getLogin", async() => {
    await delay(200);

    let login = localStorage.getItem('token')

    console.log("GetLogin.localstorage: " + login)

    if(typeof login === "string" && login !== "" && login !== null && login!== undefined){
        return login
    }else{
        return null;
    }
})

export const LogOut = createAsyncThunk("login/logout", async() => {
    await delay(200);
    localStorage.removeItem('token');
    return null;
})

export default LogInThunk;