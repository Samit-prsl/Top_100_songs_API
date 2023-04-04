const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/NewAPI" || "mongodb://0.0.0.0:27017/NewAPI",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Mongodb connected");
}).catch((e)=>{
    console.log(e);
})