const mongoose = require('mongoose')
const Schema = mongoose.Schema
const homeData1Schema = new Schema({
    PinNumber:{
        type:String,
        require:true
    },
    HostelBlock:{
        type:String,
        require:true
    },
    RoomNo:{
        type:String,
        require:true
    },
    OutDate:{
        type:String,
        require:true
    },
    InDate:{
        type:String,
        require:true
    },
    Mobileno:{
        type:String,
        require:true
    },
    Reason:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('homedata1s', homeData1Schema)