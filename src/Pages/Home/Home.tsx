import axios from 'axios';
import { useEffect, useState } from 'react';

import IccBannerImage from '../../Assets/banner.avif'
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeCarosel from "../../Components/HomeCarosel/HomeCarosel";
import HomeFooter from '../../Components/HomeFooter/HomeFooter';
import HomeMovieCard from "../../Components/HomeMovieCard/HomeMovieCard";
// import axiosInstance from '../../Config/AxiosInstance';
import HomeLayout from '../../Layouts/HomeLayout';
import Movie from '../../Types/Movie';


type MoviePoster = [{
    id: string,
    poster: string,
    name: string,
}] | []
function Home () {

    const [moviePoster, setMoviePoster] = useState<MoviePoster>([{id: "", poster: "", name: ""}])

    async function fetchMovies () {
        try {
            const resposne = await axios.get('https://mbaservice.onrender.com/mba/api/v1/movies')
            
            const movieData = resposne.data.data.map((movie : Movie) => {
                return {
                    id: movie._id,
                    poster: movie.poster,
                    name: movie.name,
                }
            })
            setMoviePoster(movieData)

        }
        catch (error) {
            console.log("Error From HomePage", error)
        }
    }
    // console.log(moviePoster)


    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        
        <HomeLayout>

            <HomeCarosel />
            <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                <HomeBanner image={IccBannerImage} />
                <div className='text-2xl font-semibold text-black mt-4'>
                    Recommended Movies
                </div>
                <div className="mt-8 flex  flex-col lg:flex-row justify-center items-center gap-4">
              
                    {
                        moviePoster && moviePoster.map((movie) => (
                            <HomeMovieCard key={movie.id} 
                            movieId={movie.id} movieName={movie.name}
                            movieImage={movie.poster} />
                        ))
                    }
           
                </div>

            </div>
            <HomeFooter />
        </HomeLayout>
    )
}

export default Home;