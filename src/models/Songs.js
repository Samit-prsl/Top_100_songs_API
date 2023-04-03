const express = require('express')
const app = express();
const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    //image:{
      //  type:image,
        //required:true,
        //unique:true
    //},
    title:{
        type:String,
        required:true,
        unique:true
    },
    artist:{
        type:String,
        required:true,
        unique:true
    }
})

//new collection

const SongColl = new mongoose.model("SongsCollection",SongSchema);

module.exports = SongColl;

