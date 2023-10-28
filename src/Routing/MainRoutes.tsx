import { Route, Routes } from "react-router-dom";

import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;