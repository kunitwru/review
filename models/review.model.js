const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: {
        type:String,
        default : 'Anonymous'
    },
    position: {
        type:String
    },
    salary: {
        type:String
    },
    rating: {
        type:String
    },
    comment: {
        type:String
    },
    company: {type: Schema.Types.ObjectId, ref: "Company", require: true},
});


var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;