interface Movie {
    _id: string,
    name: string,
    description:string,
    casts: string[],
    trailerUrl: string,
    language: string,
    releaseDate: string,
    director: string,
    releaseStatus: string,
    poster: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number,   // if any error happens check it is single or double underscore db

}

export default Movie;