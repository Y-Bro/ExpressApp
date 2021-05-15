import {getMoviesService,postMovieService} from "../service/movie.js";

export const getMovies = (req,res) =>{
    getMoviesService(req,res);
}

export const postMovie = (req,res) =>{
    postMovieService(req,res);
}