import { createAsyncThunk } from "@reduxjs/toolkit";
import User from "../../interfaces/userInterface"

const delay = (ms: number) => new Promise( resolve => setTimeout(resolve , ms))

const URI = "http://localhost:3000"

const UsersThunk = createAsyncThunk("users/getUsers", async () => 
    {

        try{
            const response = await fetch(URI + "/users", {
                method: 'GET',
                headers: { "content-type" : "application/json;charset=UTF-8" ,
                    "authorization" : `Bearer ${localStorage.getItem('token')}`
                },
            })
    
            if(response.ok){
                const json = await response.json();
                console.log(json)
                return json;
            }
    
    
        }catch (error){
    
    
            let message
            if (error instanceof Error){
                message = error.message
                console.error(message)
            }
                 
            else{ message = String(error)
                reportError({ message })
            }
            
        }
    }
)


export default UsersThunk;