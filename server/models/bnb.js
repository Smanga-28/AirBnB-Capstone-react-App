const mongoose = require('mongoose'); 

const bnbSchema = new mongoose.Schema({
    city: { type: String, required: true },
    type: { type: String, required: true },
    guests: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    rating: { type: Number, required: true },
});

const Bnb = mongoose.model('Bnb', bnbSchema); 
module.exports = Bnb;