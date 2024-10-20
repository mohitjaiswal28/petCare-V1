
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    
    // Owner details
    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true,
    },
    
    // Pet details
    petname: {
        type: String,
        required: true
    },
    
    petage: {
        type: String,
        required: true
    },
    
    petweight: {
        type: String,
        required: true
    },
    
    typeofpet: {
        type: String,
        required: true
    },
    
    anymessage: {
        type: String,
        required: true
    },
    

    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


const Booking = mongoose.model('BOOKING', bookSchema);

module.exports = Booking;
