import { createSlice, Slice } from "@reduxjs/toolkit";
import UsersThunk from "./UserThunk";
import User from "../../interfaces/userInterface";
import { RootState } from "../../app/store";

interface userSliceInitialState{
    status : string,
    data: User[],
    error: string | undefined |null,

}

export const UsersSlice : Slice = createSlice({

    name: 'users',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    } as userSliceInitialState,
    reducers: {},
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

export const getUsersData = (state : RootState) => state.users.data
export const getUsersStatus = (state : RootState) => state.users.status
export const getUsersError = (state : RootState) => state.users.error