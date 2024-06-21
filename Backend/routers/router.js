const express = require('express')
const router = express.Router()
const student = require('../model/student')
const homedata1 = require('../model/homeData1')
// const Out= require('../model/book')
const monk=require('monk')
var db=monk('127.0.0.1:27017/Fsd')
router.post('/postdata1', async(req,res)=>{
    let students;
    try{
        students = new student({
            StudentRollno:req.body.send.StudentRollno,
            StudentId:req.body.send.StudentId,
            StudentName:req.body.send.StudentName,
            Year:req.body.send.Year,
            Branch:req.body.send.Branch,
            RoomNo:req.body.send.RoomNo,
            OutDate:req.body.send.OutDate,
            OutTime:req.body.send.OutTime,
            Destination:req.body.send.Destination,
            TakenBy:req.body.send.TakenBy,
            Transport_type:req.body.send.Transport_type,
            Reason:req.body.send.Reason,
        })
        await students.save()
    }catch (err){
        console.log(err)
    }
    if(!students){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({students})
})
const dbo=db.get('students');
router.get('/',function(req,res,next){
    res.render('app',{title:'Express'});
}); 
router.get('/getData1',async function(req,res){
    dbo.find({},function(err,docs){
        {
            // console.log("hello")
            if(err){
                res.send(err)
                console.log(err);
            }else{
                res.send(docs)
                console.log(docs)
            }
        }
    })
})


router.post('/postdata', async(req,res)=>{
    let homedata1s;
    try{
        homedata1s = new homedata1({
            PinNumber:req.body.send.PinNumber,
            HostelBlock:req.body.send.HostelBlock,
            RoomNo:req.body.send.RoomNo,
            OutDate:req.body.send.OutDate,
            InDate:req.body.send.InDate,
            Mobileno:req.body.send.Mobileno,
            Reason:req.body.send.Reason,
        })
        await homedata1s.save()
    }catch (err){
        console.log(err)
    }
    if(!homedata1s){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({homedata1s})
})

const db2=db.get('homedata1s');
router.get('/',function(req,res,next){
    res.render('app',{title:'Express'});
}); 
router.get('/getData',async function(req,res){
    db2.find({},function(err,docs){
        {
            // console.log("hello")
            if(err){
                res.send(err)
                console.log(err);
            }else{
                res.send(docs)
                console.log(docs)
            }
        }
    })
})
module.exports= router;