import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(  resolve => setTimeout(resolve , ms));



const UsersThunk = createAsyncThunk("users/getUsers", async () => 
    {

        delay(200)

         const response = await fetch("/Users.json");
         const data = response.json();

         return data;
    }
)


export default UsersThunk;