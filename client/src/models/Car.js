const mongoose = require('mongoose');

const { Schema } = mongoose;

// Matches our car db collection, read only, used for the appointment dropdown
const carSchema = new Schema ({
    year: Number,
    model: String,
  


})

const Car = mongoose.model('car', carSchema);

module.exports = Car;
