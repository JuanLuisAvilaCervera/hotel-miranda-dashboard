export default interface Booking{
    booking_id: number,
    client_id: number,
    order_date: Date,
    check_in_date: Date,
    check_out_date: Date,
    status: "In Progress" | "Check In" | "Check Out",
    special_request: string
}