const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://samit:28QOB7IRA5p2Zdif@samitapi.buguzwg.mongodb.net/SongsAPI?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Mongodb connected");
}).catch((e)=>{
    console.log(e);
})