import ShowTimingCard from "../../Components/ShowTimingCard/ShowTimingCard"
import TheatreNameCard from "../../Components/TheatreNameCard/TheatreNameCard"
import HomeLayout from "../../Layouts/HomeLayout"

function MovieListing () {
    return (
        <HomeLayout>
            <ShowTimingCard />
            <TheatreNameCard />
        </HomeLayout>
    )
}
export default MovieListing;