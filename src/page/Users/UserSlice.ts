import { createSlice, Slice } from "@reduxjs/toolkit";
import UserList, { CreateUser } from "./UserThunk";
import { UserInterface } from "../../interfaces/userInterface";
import { RootState } from "../../app/store";
import { UserCreate } from "./UserCreate";

interface userSliceInitialState{
    status : string,
    data: UserInterface[],
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
        .addCase(UserList.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(UserList.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(UserList.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(CreateUser.pending , (state) => {
            state.status = 'pending'
        })
        .addCase(CreateUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data.push(action.payload);
        })
        .addCase(CreateUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getUsersData = (state : RootState) => state.users.data
export const getUsersStatus = (state : RootState) => state.users.status
export const getUsersError = (state : RootState) => state.users.error