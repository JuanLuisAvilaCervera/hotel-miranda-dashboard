import { ClientInterface } from "./clientInterface"
import { RoomInterface } from "./roomInterface"

interface BookingInterface{
    booking_id: number,
    room: RoomInterface,
    client: ClientInterface
    order_date: string,
    check_in_date: string,
    check_out_date: string,
    status: "In Progress" | "Check In" | "Check Out",
    special_request: string
}

export {BookingInterface}