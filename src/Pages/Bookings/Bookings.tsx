import { useLocation, useNavigate } from "react-router-dom";

import axiosInstance from "../../Config/AxiosInstance";
import HomeLayout from "../../Layouts/HomeLayout";

function Bookings () {
    const {state} = useLocation()
    const navigator = useNavigate()
    // console.log("total state", state)
    async function onMakePayment () {
        const response = await axiosInstance.post('/mba/api/v1/payments', {
            showId: state.showId,
            bookingId: state.booking.data._id,
            amount: state.booking.data.totalCost
        }, {
            headers:{
                'x-access-token' : import.meta.env.VITE_ACCESS_TOKEN,
            }
        })
        console.log(response)
        if(response.data.success) navigator("/")
    }
    return (
        <HomeLayout>
            {/* <h1>Details of Movie</h1> */}
            
            <h1>{state.booking.data.totalCost}</h1>
            <h1>{state.booking.data.theatreId.name}</h1>
            <h1>{state.showId}</h1>
            <h1>{state.booking.data._id}</h1>
            
            <button onClick={onMakePayment} className="bg-red-500 px-4 py-2 font-semibold rounded-md hover:bg-red-400">Make Payment</button>
        </HomeLayout>

    )
}

export default Bookings;