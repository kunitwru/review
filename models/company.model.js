const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    slug: {
        type:String
    },
    name: {
        type:String
    },
    logo: {
        type:String
    },
    location: {
        type:String
    },
    type: {
        type:String
    },
    size: {
        type:String
    },
    country: {
        type:String
    },
    time: {
        type: String
    },
    reviews : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

CompanySchema.plugin(mongoosePaginate);

var Company = mongoose.model('Company', CompanySchema);
module.exports = Company;