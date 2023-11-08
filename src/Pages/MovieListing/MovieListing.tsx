import axios from 'axios';
import {useEffect, useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import TheatreShowCard from "../../Components/TheatreShowCard/TheatreShowCard";
import HomeLayout from "../../Layouts/HomeLayout"

type MovieShows = {
    id: string, // show id
    timing: string,
    format: string,
    price: number,
    noOfSeats: number,
}


type TheatreData = {
    id: string, // theatreId
    theatreName: string,
    shows: [MovieShows] 
}


type theatre = {
    city: string,
    createdAt: string,
    updatedAt: string,
    movies: [string],
    name: string,
    owner: string,
    pincode: number,
    _v: number,
    _id: string,
}

type show = {
    createdAt: string,
    updatedAt: string,
    movieId: string,
    noOfSeats: number,
    format: string,
    price: number,
    timing: string,
    _v: number,
    _id: string,
    theatreId: theatre,
}


type TheatreState = {
    [key: string] : TheatreData
} 

function MovieListing () {



    const {state} = useLocation()
    
    const navigator = useNavigate()

    const [theatreData, setTheatreData] = useState<TheatreState>({})
  

    async function fetchShowDetails(){
        try{
            const resposne = await axios.get(`http://localhost:3000/mba/api/v1/shows?movieId=${state.movieId}`)

            console.log(resposne.data.data)
            const shows = resposne.data.data;
            const showState : TheatreState = {}
            shows.map((show: show) => {
                if(show.theatreId._id in showState){
                    showState[show.theatreId._id].shows.push({
                        id: show._id, // show id
                            timing: show.timing,
                            format: show.format,
                            price: show.price,
                            noOfSeats: show.noOfSeats
                    })
                }
                else{
                    showState[show.theatreId._id] = {
                        id: show.theatreId._id, // theatreId
                        theatreName: show.theatreId.name,
                        shows:[{
                            id: show._id, // show id
                            timing: show.timing,
                            format: show.format,
                            price: show.price,
                            noOfSeats: show.noOfSeats
                        }]
                    }
                }
            })
            console.log(showState)
            setTheatreData(showState)
    
        }
        catch(error){
            console.log("Error From MovieListingPage", error)
        }
    }

    useEffect(() => {
        if(!state || !state.movieName) navigator('/')
        fetchShowDetails()
    }, [])

    return (
        <HomeLayout>

            <div className="min-h-[80-vh] bg-slate-300">
                <div className="bg-[#333545] text-white">
                    <div className="font-light text-7xl pt-8 pb-6 w-[80vw] mx-auto">
                        {state && state.movieName && state.movieName}


                        <div className="flex gap-3 mt-6">
                            <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Drama</button>
                            <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Biography</button>
                        </div>
                    </div>
                </div>


                {/* Theatre listing */}

                <div className="bg-slate-300 mt-4 w-[100vw]">
                    <div className="w-[80vw] mx-auto rounded-xl bg-[#FFFFFF]">
                        <TheatreShowCard num={8}/>
                        <TheatreShowCard num={7}/>
                        <TheatreShowCard num={14}/>
                        <TheatreShowCard num={1}/>
                    </div>
                    
                </div>
            </div>

        </HomeLayout>
    )
}
export default MovieListing;