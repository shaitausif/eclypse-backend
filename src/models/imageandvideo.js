import mongoose from "mongoose";

const ImageAndVideoSchema = new mongoose.Schema({
    videos : [String],
    images : [String], 
})


export const ImageAndVideo = mongoose.model("ImageAndVideo", ImageAndVideoSchema);