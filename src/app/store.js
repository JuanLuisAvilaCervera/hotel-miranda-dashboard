import { configureStore } from "@reduxjs/toolkit";
import { BookingsSlice } from "../page/Bookings/BookingSlice";
import { UsersSlice } from "../page/Users/UserSlice";
import { RoomsSlice } from "../page/Rooms/RoomsSlice";

export const Store = configureStore({
    reducer: {
        bookings: BookingsSlice.reducer,
        users: UsersSlice.reducer,
        rooms: RoomsSlice.reducer
    }
});

export default Store;