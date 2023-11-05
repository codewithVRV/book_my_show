import {useEffect} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import TheatreShowCard from "../../Components/TheatreShowCard/TheatreShowCard";
import HomeLayout from "../../Layouts/HomeLayout"

function MovieListing () {

    const {state} = useLocation()
    // useLocation hook is used when data pass between pages
    const navigator = useNavigate()

    useEffect(() => {
        if(!state || !state.movieName) navigator('/')
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