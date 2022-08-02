require("dotenv").config();

const express = require("express");
const cannectDB = require("./db/db");

//application
const app = express();


//secrate data
const { PORT, MONGODB } = process.env;

cannectDB(MONGODB)
.then(() => {
    console.log("MongoDB Connected");
    //server
    app.listen(PORT || 4000,()=>{
        console.log("Application is running on port", PORT || 4000);
    });
}).catch((e) =>{
    console.log(e);
});

