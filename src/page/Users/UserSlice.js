import { createSlice } from "@reduxjs/toolkit";
import UsersThunk from "./UserThunk";

 

export const UsersSlice = createSlice({

    name: 'users',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(UsersThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(UsersThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(UsersThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getUsersData = (state) => state.users.data
export const getUsersStatus = (state) => state.users.status
export const getUsersError = (state) => state.users.error