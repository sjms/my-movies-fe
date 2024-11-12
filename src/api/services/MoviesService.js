import {moviesApi} from "../../config/http";


export class MoviesService {
    static getMovies() {
        return moviesApi.get("movie/popular")
    }

    static getMovieById(movieId) {
        return moviesApi.get(`movie/${movieId}`)
    }
}