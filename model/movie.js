import mongoose from "mongoose"

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    year : {
        type : Number,
        required : true
    }
})

export const Movies = mongoose.model("Movies", movieSchema);