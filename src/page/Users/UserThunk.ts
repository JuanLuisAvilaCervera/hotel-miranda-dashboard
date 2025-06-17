import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/userInterface";


const delay = (ms: number) => new Promise( resolve => setTimeout(resolve , ms))

const URI = "http://localhost:3000"

const UserList = createAsyncThunk("users/list", async () => 
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

export const CreateUser = createAsyncThunk("users/create", async (user : UserInterface) => {
    try{
            const response = await fetch(URI + "/users", {
                method: 'POST',
                headers: { "content-type" : "application/json;charset=UTF-8" ,
                    "authorization" : `Bearer ${localStorage.getItem('token')}`
                },
                body : JSON.stringify(user)
            })
    
            if(response.ok){
                const json = await response.json();
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
})

export const ActiveUser = createAsyncThunk("users/active", async (user : UserInterface) => {
    try{
            const response = await fetch(URI + "/users", {
                method: 'POST',
                headers: { "content-type" : "application/json;charset=UTF-8" ,
                    "authorization" : `Bearer ${localStorage.getItem('token')}`
                },
                body : JSON.stringify(!user.active)
            })
    
            if(response.ok){
                const json = await response.json();
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
})


export default UserList;