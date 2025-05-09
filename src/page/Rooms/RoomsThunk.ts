import { createAsyncThunk } from "@reduxjs/toolkit";

const URI = "http://localhost:3000"


const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => 
    {

        try{
            const response = await fetch(URI + "/rooms", {
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


export default RoomsThunk;