const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarSchema = new Schema ({
    year: {type: String, required: true, minlength: 4, maxlength: 4},
    make: {type: String, required: true},
    model: {type: String, required: true},
})