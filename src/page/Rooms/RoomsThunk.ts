import { createAsyncThunk } from "@reduxjs/toolkit";


const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => 
    {

         const response = await fetch("/Rooms.json");
         const data = response.json();

         return data;
    }
)


export default RoomsThunk;