import { useNavigate } from "react-router-dom";

// import processSeatConfig from "../../Utils/ProcessSeatConfig";


function ShowTimingCard ({timing, format, price, config, theatreId, movieId, showId}: {showId: string, timing:string, format: string, price: number, config: string, theatreId: string, movieId:string}) {
    const navigator = useNavigate()
    // const seatConfigurationData = processSeatConfig(config)
    // console.log("showId from showTimingCard", showId)

    function onShowSelection () {
        // console.log(movieId, theatreId)
        if(config)
            navigator('/movie/seatSelection', {state: {config, timing, theatreId, movieId, price, showId}})
    }
    return (
        <div onClick={onShowSelection} className="cursor-pointer mx-2 my-2 group relative w-32 py-1 px-2 flex flex-col items-center justify-center text-sm text-green-400 rounded-lg border border-black">
            <div>
                {timing}
            </div>

            <div>
                {format}
            </div>

            <div className="z-10 bg-white absolute top-[100%] left-[10%]  text-black hidden group-hover:block shadow-lg py-2 px-4">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        {price } ₹
                    </div>
                    <div className="text-green-500">
                        Available
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowTimingCard;