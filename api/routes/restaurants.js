const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const Restaurant = require('../models/restaurant')
const uri = require('../../config/key').mongoURI
const mongo_url = 'mongodb://localhost:27017/XSEED'




mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=> {console.log('Database is connected')},
    err=>{console.log('Can not connect to the database' + err)}
);
//@route GET

router.get('/', (req, res) => {


    Restaurant.find().limit(15)
    .then(doc=>{
        const result={
            count:doc.length,
            Restaurants:doc
        }
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
   
    
    // var resultArray = [];
    // MongoClient.connect(mongo_url,{useUnifiedTopology:true, useNewUrlParser:true}, (err, client) => {
    //     if (err) {
    //         console.log('Unable to connect to the Server:', err)
    //     }
    //     else {
    //         const db = client.db('XSEED')
    //         console.log('Connected to Server');
    //         const cursor = db.collection('Restaurant')
    //         console.log(cursor)

    //         cursor.forEach((doc,err)=>{

    //             if(err){
    //                 console.log(err)
    //             }
    //             else{
    //                 resultArray.push(doc)
    //             }

    //         })



    //         res.json(resultArray)

    //     }
    // });


})



module.exports = router