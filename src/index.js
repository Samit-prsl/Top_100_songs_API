const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());
require('../src/db/connection')
const SongColl = require('../src/models/Songs')
const port = process.env.PORT || 5000;
app.use(express.json());
app.post('/', async (req,res)=>{
    try{
        const songsrecord = new  SongColl(req.body)
        //console.log(req.body);
        const insertedData = await songsrecord.save();
        res.status(201).send(insertedData);
    }
catch(e){
    res.status(400).send(e);
}
})
app.get('/', async (req,res)=>{
    try{
        const GetData = await SongColl.find({});
        res.status(200).send(GetData);
    }
catch(e){
    res.status(400).send(e);
}
})

app.get('/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        const GetDataId = await SongColl.findByIdAndUpdate({_id});
        res.status(200).send(GetDataId);
    }
catch(e){
    res.status(400).send(e);
}
})

app.patch('/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        const GetDataId = await SongColl.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(200).send(GetDataId);
    }
catch(e){
    res.status(500).send(e);
}
})

app.delete('/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        const GetDataId = await SongColl.findByIdAndDelete({_id});
        res.status(200).send(GetDataId);
    }
catch(e){
    res.status(500).send(e);
}
})

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})