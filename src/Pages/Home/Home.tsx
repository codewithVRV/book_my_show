import IccBannerImage from '../../Assets/banner.avif'
import MovieCardImage from '../../Assets/movieCardImage.png'
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeCarosel from "../../Components/HomeCarosel/HomeCarosel";
import HomeFooter from '../../Components/HomeFooter/HomeFooter';
import HomeMovieCard from "../../Components/HomeMovieCard/HomeMovieCard";
import Navbar from "../../Components/Navbar/Navbar"

function Home () {
    return (
        
        <>

            <Navbar />
            <HomeCarosel />
            <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                <HomeBanner image={IccBannerImage} />
                <div className='text-2xl font-semibold text-black mt-4'>
                    Recommended Movies
                </div>
                <div className="mt-8 flex  flex-col lg:flex-row justify-center items-center gap-4">
                    <HomeMovieCard movieImage={MovieCardImage} />
                    <HomeMovieCard movieImage={MovieCardImage} />
                    <HomeMovieCard movieImage={MovieCardImage} />
                    <HomeMovieCard movieImage={MovieCardImage} />
                    <HomeMovieCard movieImage={MovieCardImage} />
           
                </div>

            </div>
            <HomeFooter />
        </>
    )
}

export default Home;