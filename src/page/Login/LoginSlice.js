import { createSlice } from "@reduxjs/toolkit";
import LogInThunk, { getLogin } from "./LoginThunk";

export const LoginSlice = createSlice({

    name: 'logins',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
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
    }
})

export const getLoginData = (state) => state.logins.data
export const getLoginStatus = (state) => state.logins.status
export const getLoginError = (state) => state.logins.error