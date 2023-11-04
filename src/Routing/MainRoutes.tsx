import { Route, Routes } from "react-router-dom";

import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MovieListing from "../Pages/MovieListing/MovieListing";

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movie/listing" element={<MovieListing />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;