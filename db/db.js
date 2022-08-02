const mongoose =require("mongoose");

//database cannection
function cannectDB(cannectstr){
    return mongoose.connect(cannectstr);
}

module.exports = cannectDB;