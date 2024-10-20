
const User = require('../model/userSchema')
const Contact = require('../model/contactFormSchema')
const Booking = require('../model/bookSchema')
const error = require('../middlewares/error')
const bcrypt = require('bcryptjs');


// Home controller
const home = async (req, res) => {
    try {
        res.send("Hello, I am backend from routes");
    } catch (error) {
        next(error)
    }
}


// New user register controller
const userregister = async (req, res) => {
	try {
		const {
            name, 
            email,
            gender, 
            phno,
            petname,
            petage,
            petweight,
            typeofpet,
            password,
		} = req.body;

		if (!password) {
			return res.status(422).json({
				message: "Please fill all the details"
			});
		}

		const isUserExist = await User.findOne({
			email: email
		});

		if (isUserExist) {
			return res.status(422).json({
				message: "User already exists"
			});
		}

		const newUser = new User({
            name, 
            email,
            gender, 
            phno,
            petname,
            petage,
            petweight,
            typeofpet,
            password,
            // isadmin
		});

		const isUserCreated = await newUser.save();

		if (isUserCreated) {
			res.status(201).json({
				message: "USER CREATED SUCCESSFULLY",
                token: await isUserCreated.generateToken(),
                userId: isUserCreated._id.toString()
			});
		}

	} catch (err) {
        next(error)
	}
}


// User login controller
const userlogin = async (req, res) => {
    try {
        const {email, password} = req.body 

        if(!email || !password)
        {
            return res.status(422).json({message: "Please fill all the details"})
        }

        const isUserExist = await User.findOne({email: email})
        
        if(isUserExist) 
        {
            const passwordMatch = await bcrypt.compare(password, isUserExist.password)
            if(!passwordMatch)
            {
                return res.status(402).json({message: "INVALID CREDENTIALS"})     
            }

            else
            {
                res.status(200).json({
                    message: "LOGIN SUCCESSFULLY",
                    token: await isUserExist.generateToken(),
                    userId: isUserExist._id.toString()
                });  
            }
        }
        
        else
        {
            return res.status(400).json({message: "YOU DONT HAVE ACCOUNT - CREATE AN ACCOUNT FIRST"}) 
        }

    } catch(err) {
        next(error)
    }
}


// Contact form controller
const contactform = async (req, res) => {
	try {
		const {
            name, 
            email,
            message 
		} = req.body;

		if (!name || !email || !message) {
			return res.status(422).json({
				message: "Please fill all the details"
			});
		}

		const newContact = new Contact({
            name, 
            email,
            message 
		});

		const isContactSaved = await newContact.save();

		if (isContactSaved) {
			res.status(201).json({
				message: "MESSAGE SAVED SUCCESSFULLY",
			});
		}

        else
        {
            return res.status(400).json({message: "THERE WAS AN ERROR WHILE SUBMITTING YOUR MESSAGE"}) 
        }

	} catch (err) {
        next(error)
	}
}


// User controller
const user = async (req, res) => {
    try {
        const userData = req.user
        return res.status(200).json({userData})
    } catch (error) {
        console.log(error)
    }
}


// Booking form controller
const booking = async (req, res) => {
	try {
		const {
            fname, 
            lname, 
            email,
            phno,
            date,
            petname,
            petage,
            petweight,
            typeofpet,
            anymessage 
		} = req.body;

		if (!fname || !lname || !email || !phno || !date || !petname || !petage || !petweight || !typeofpet || !anymessage) {
			return res.status(422).json({
				message: "Please fill all the details"
			});
		}

		const newBooking = new Booking({
            fname, 
            lname, 
            email,
            phno,
            date,
            petname,
            petage,
            petweight,
            typeofpet,
            anymessage 
		});

		const isBooked = await newBooking.save();

		if (isBooked) {
			res.status(201).json({
				message: "APPOINTMENT BOOKED SUCCESSFULLY",
			});
		}

        else
        {
            return res.status(400).json({message: "THERE WAS AN ERROR WHILE SUBMITTING YOUR FORM"}) 
        }

	} catch (err) {
        next(error)
	}
}


module.exports = {home, userregister, userlogin, contactform, user, booking}