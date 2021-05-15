import {Movies} from "../model/movie.js"

export const getMoviesService = (req,res) =>{
    Movies.find().then((result)=>
    {
        res.status(200).send(result);
    }).catch((error)=>
    {
        res.status(403).send({
            Message : error
        })
    })
}

export const postMovieService = (req,res) =>{
    let movie = req.body;
    if(movie.name == null || movie.year==null)
    {
        res.status(403).send({
            error:true,
            Message : "Data insufficient"
        })
    }

    const newMovie = new Movies({
        name:req.body.name,
        year:req.body.year
    })

    newMovie.save().then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>
    {
        res.status(403).send({
            Message : error
        })
    })
}