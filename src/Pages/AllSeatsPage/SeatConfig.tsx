// import { useLocation } from "react-router-dom";

import {useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";

import axiosInstance from '../../Config/AxiosInstance';
import HomeLayout from "../../Layouts/HomeLayout";
import processSeatConfig from '../../Utils/ProcessSeatConfig';


type Seat = {
    number: number,
    status: number,
}

type Row = {
    number: string,
    seats: Seat[],
}

type SeatState = Row[]


type SelectedSeat = {
    rowNumber: string,
    seatNumber: number,
}

function SeatConfig () {
    const {state} = useLocation()
    const navigator = useNavigate()
    console.log(state)
    console.log(state.showId)
    const [seats, setSeats] = useState<SeatState>([{number: "", seats : [{number: 0, status: 0}]}])

    async function onBooking () {
        // console.log(seats)
        const selectedSeats: SelectedSeat[]  = [];
        seats.forEach((row:Row) => {
            row.seats.forEach((currentSeat:Seat) => {
                if(currentSeat.status === 3) {
                    const newSelectedSeat : SelectedSeat = {rowNumber: row.number, seatNumber: currentSeat.number}
                    selectedSeats.push(newSelectedSeat)
                }
            })
        })
        // console.log(selectedSeats)
        const seatsJson = JSON.stringify(selectedSeats).replace('"', "'")
        const response = await axiosInstance.post('/mba/api/v1/bookings', {
            seat: seatsJson,
            movieId: state.movieId,
            theatreId: state.theatreId,
            noOfSeats: selectedSeats.length,
            timing: state.timing,
            price: state.price,
            showId: state.showId,
        }, {
            headers:{
                'x-access-token' : import.meta.env.VITE_ACCESS_TOKEN,
            }
        })
        console.log(response.data)
        const showId = state.showId;
        // response.data.message use this message in react hot toast
        toast(response.data.message)
        if(response.data.success) navigator("/bookings", {state: {booking: response.data, showId: showId}})
    }
    function processSeatColor(seat: Seat) {
        if(seat.status == 0) return '';
        else if(seat.status == 1) return 'border border-green-300 hover:bg-green-300';
        else if(seat.status == 3) return 'border border-yellow-300 bg-yellow-300';
        else return 'border border-gray-400 bg-gray-300';
    }

    function processSeatSelection(seatId: string) {
        const [rowNumber, seatNumber] = seatId.split("-");
        const updatedSeats = seats.map((row: Row) => {
            if(row.number != rowNumber) return row;
            else {
                const updatedRowSeats = row.seats.map((seat: Seat) => {
                    if(seat.number != +seatNumber) return seat;
                    else {
                        seat.status = (seat.status == 1) ? 3 : 1;
                        return seat;
                    }
                });
                row.seats = updatedRowSeats;
                return row;
            }
        });
        setSeats(updatedSeats);
    }

    useEffect(() => {
        const seatConfigJson = processSeatConfig(state.config);
        setSeats(seatConfigJson.rows)
    }, [])
    return (
        <HomeLayout>
            {/* <h1>AllSeatsPage Here{seats.length}</h1> */}
            <div className="flex flex-col items-center justify-center p-16">
            {
                seats.map((row: Row) => {
                    return (

                        <div key={row.number} className="flex gap-8">

                            <div>{row.number}</div>

                            <div className="flex gap-2 my-2 mx-1">
                                {row.seats.map((seat: Seat, idx: number) => {

                                    return (
                                            seat.status == 0 ? 
                                                (
                                                <div key={`${row.number}-${seat.number}-${idx}`} className="h-[2rem] w-[2rem]"></div>
                                                ) : 
                                                (
                                                    <div key={`${row.number}-${seat.number}-${idx}`} onClick={() => processSeatSelection(`${row.number}-${seat.number}`)} className={`${processSeatColor(seat)} px-3 py-1 h-[2rem] w-[2rem]`}>
                                                        {seat.number}
                                                    </div>
                                                )
                                    );
                                })}
                            </div>

                        </div>

                    );
                })
            }
            <div>
                <button onClick={onBooking} className='bg-red-500 px-4 py-2 font-semibold hover:bg-red-400 rounded-md text-white'>Create Booking</button>
            </div>
         </div>
        </HomeLayout>
    )
}

export default SeatConfig;