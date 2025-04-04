import { Page } from "../../components/common/page";
import { Button } from "../../components/common/Buttons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookingThunk } from "./BookingThunk";

export const BookingsDetail = (booking) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const id = booking.booking_id;
    const [updateBooking , setBooking] = useState({...booking})

    

    useEffect(() => console.log(updateBooking), [updateBooking])

    const handleDelete = () => {
        if(dispatch(DeleteBookingThunk({id}))){
            navigate("/bookings")
        };
    }

    return <Page>
        <Button onClick={handleDelete}>Borrar</Button>
    </Page>
}