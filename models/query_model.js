const mongoose = require('mongoose');

const apiResponse = new mongoose.Schema({
    response: {
        type: String, 
        required: true
    }
});


module.exports = mongoose.model('Wedsin', apiResponse);