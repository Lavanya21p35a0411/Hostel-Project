const mongoose = require('mongoose')
const Schema = mongoose.Schema
const homeSchema = new Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    RollNo:{
        type:String,
        require:true
    },
    mobilenumber:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('homes', homeSchema)