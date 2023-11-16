// import { useLocation } from "react-router-dom";

import {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import processSeatConfig from '../../Utils/ProcessSeatConfig';


type Seat = {
    number: number,
    status: number,
}

type Row = {
    number: string,
    seats: [Seat]
}

type SeatState = [Row]

function SeatConfig () {
    const {state} = useLocation()
    const [seats, setSeats] = useState<SeatState>([{number: "", seats : [{number: 0, status: 0}]}])

    useEffect(() => {
        const seatConfigJson = processSeatConfig(state.config);
        setSeats(seatConfigJson.rows)
    }, [])
    return (
        <HomeLayout>
            {/* <h1>AllSeatsPage Here{seats.length}</h1> */}
            <div className='flex flex-col items-center justify-center p-16'>
                {
                    seats.map((row: Row) => {
                        return (
                            <div className='flex gap-8'> 
                                <div>{row.number}</div>
                                <div className='flex gap-4'>
                                    {
                                        row.seats.map((seat:Seat) => {
                                            return (
                                                <div>{seat.number}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HomeLayout>
    )
}

export default SeatConfig;