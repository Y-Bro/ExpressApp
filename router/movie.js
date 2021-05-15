import express from "express";
import {getMovies,postMovie} from "../controller/movie.js";

const router = express.Router();

router.get("/",getMovies);
router.post("/",postMovie);

export default router;