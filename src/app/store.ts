import { configureStore } from "@reduxjs/toolkit";
import { BookingsSlice } from "../page/Bookings/BookingSlice";
import { UsersSlice } from "../page/Users/UserSlice";
import { RoomsSlice } from "../page/Rooms/RoomsSlice";
import { LoginSlice } from "../page/Login/LoginSlice";
import { useSelector } from "react-redux";

export const Store = configureStore({
    reducer: {
        bookings: BookingsSlice.reducer,
        users: UsersSlice.reducer,
        rooms: RoomsSlice.reducer,
        logins: LoginSlice.reducer
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>()

export default Store;