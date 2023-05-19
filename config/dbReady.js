const mongoose = require("mongoose");

function dbReady(){
    mongoose.connect(process.env.MONGODBURL).then(()=>{
        console.log("DB READY");
        
    })
}

module.exports = dbReady;