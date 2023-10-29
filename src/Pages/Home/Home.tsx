import MovieCardImage from '../../Assets/movieCardImage.png'
import HomeCarosel from "../../Components/HomeCarosel/HomeCarosel";
import HomeMovieCard from "../../Components/HomeMovieCard/HomeMovieCard";
import Navbar from "../../Components/Navbar/Navbar"

function Home () {
    return (
        <>
            <Navbar />
            <HomeCarosel />
            <div className="mt-8 flex justify-center items-center gap-10">
                
                <HomeMovieCard  movieImage={MovieCardImage}/>
                <HomeMovieCard  movieImage={MovieCardImage}/>
                <HomeMovieCard  movieImage={MovieCardImage}/>
                <HomeMovieCard  movieImage={MovieCardImage}/>
                <HomeMovieCard  movieImage={MovieCardImage}/>

            </div>
        </>
    )
}

export default Home;