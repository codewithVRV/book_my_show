import { Route, Routes } from "react-router-dom";

import SeatConfig from '../Pages/AllSeatsPage/SeatConfig'
import Bookings from "../Pages/Bookings/Bookings";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MovieListing from "../Pages/MovieListing/MovieListing";

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movie/listing" element={<MovieListing />}/>
            <Route path="/movie/seatSelection" element={<SeatConfig />}/>
            <Route path="/bookings" element={<Bookings />}/>

            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;