// import { useLocation } from "react-router-dom";

import {useEffect} from 'react'
import { useLocation } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import processSeatConfig from '../../Utils/ProcessSeatConfig';

function SeatConfig () {
    const {state} = useLocation()

    console.log("state from seatConfig",state)
    useEffect(() => {
        console.log(processSeatConfig(state.config))
    }, [])
    return (
        <HomeLayout>
            <h1>AllSeatsPage Here</h1>
            {/* <h1>{state}</h1> */}
        </HomeLayout>
    )
}

export default SeatConfig;