import { configureStore } from "@reduxjs/toolkit";
import { BookingsSlice } from "../page/Bookings/BookingSlice";
import { UsersSlice } from "../page/Users/UserSlice";

export const Store = configureStore({
    reducer: {
        bookings: BookingsSlice.reducer,
        users: UsersSlice.reducer
    }
});

export default Store;