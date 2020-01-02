const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    RestaurantID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Cuisines: {
        type: String,

    },
    AvgCost: {
        type: Number,
        required: true
    },
    Currency: {
        type: String,
        required:true
    },
    HasTableBooking: {
        type: String,
        
    },
    HasOnlineDelivery: {
        type: String,
       
    },
    AggRating: {
        type: Number,
        required:true
    },
    RatingColor: {
        type: String,
       
    },
    RatingText: {
        type: String,
        
    },
    Votes: {
        type: Number,
       
    },
}, {collection:'Restaurant'})


module.exports = Item = mongoose.model('restaurant', RestaurantSchema)