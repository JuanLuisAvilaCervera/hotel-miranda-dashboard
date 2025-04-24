export default interface Booking{
    booking_id: number,
    client_id: number,
    order_date: string,
    check_in_date: string,
    check_out_date: string,
    status: "In Progress" | "Check In" | "Check Out",
    special_request: string
}