import { createAsyncThunk } from "@reduxjs/toolkit";


const UsersThunk = createAsyncThunk("users/getUsers", async () => 
    {

         const response = await fetch("/Users.json");
         const data = response.json();

         return data;
    }
)


export default UsersThunk;