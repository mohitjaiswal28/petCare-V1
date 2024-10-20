
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    
    // Personal Information
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
    },
    
    phno: {
        type: String,
        required: true
    },

    // Pet Information
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

    password: {
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


// User register password hashing using bycryptjs   
userSchema.pre('save', async function(next) {

    if (this.isModified('password')) 
    {
        this.password = await bcrypt.hash(this.password, 12);
    }

    if (this.isModified('cpassword')) 
    {
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();
});


// Generate token using jwt 
userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isadmin: this.isadmin
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "30d"
        } 
        )
    }

    catch(err) {
    }
}


const User = mongoose.model('USER', userSchema);

module.exports = User;
