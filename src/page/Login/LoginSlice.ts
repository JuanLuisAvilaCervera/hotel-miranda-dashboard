import { createSlice, Slice } from "@reduxjs/toolkit";
import LogInThunk, { getLogin, LogOut } from "./LoginThunk";
import { RootState } from "../../app/store";
import { Root } from "react-dom/client";

interface loginSliceInitialState{
    status : string,
    data: string | null,
    error: string | undefined |null,

}

export const LoginSlice : Slice = createSlice({

    name: 'logins',
    initialState: {
        status: 'idle',
        data: null,
        error: null
    } as loginSliceInitialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(LogInThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(LogInThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(LogInThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(getLogin.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getLogin.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(getLogin.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(LogOut.pending, (state) => {
            state.status = 'pending'
        }).addCase(LogOut.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(LogOut.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
})

export const getLoginData = (state : RootState) => state.logins.data
export const getLoginStatus = (state : RootState) => state.logins.status
export const getLoginError = (state : RootState) => state.logins.error