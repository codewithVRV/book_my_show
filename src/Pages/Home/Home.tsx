import { useEffect, useState } from 'react';

import IccBannerImage from '../../Assets/banner.avif'
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeCarosel from "../../Components/HomeCarosel/HomeCarosel";
import HomeFooter from '../../Components/HomeFooter/HomeFooter';
import HomeMovieCard from "../../Components/HomeMovieCard/HomeMovieCard";
import axiosInstance from '../../Config/AxiosInstance';
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
            const response = await axiosInstance.get(`mba/api/v1/movies`)
            
            const movieData = response.data.data.map((movie : Movie) => {
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


    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        
        <HomeLayout>

            <HomeCarosel />
            {/* <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
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

            </div> */}
            <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                <HomeBanner image={IccBannerImage} />
                <div className='text-2xl font-semibold text-black mt-4'>
                    Recommended Movies
                </div>
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="mt-8 flex  flex-col lg:flex-row justify-center items-center gap-4">
              
                        {
                            moviePoster && moviePoster.map((movie) => (
                                <HomeMovieCard key={movie.id} 
                                movieId={movie.id} movieName={movie.name}
                                movieImage={movie.poster} />
                            ))
                        }
            
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    {/* <a href="#slide4" className="btn btn-circle">❮</a>  */}
                    {/* <a href="#slide2" className="btn btn-circle">❯</a> */}
                    </div>
                </div> 
            
            </div>

            </div>
            <HomeFooter />
        </HomeLayout>
    )
}

export default Home;