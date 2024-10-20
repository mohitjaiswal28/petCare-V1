
const { z } = require('zod');

const bookYourAppValidator = z.object({
  fname: z.string().min(2, { message: 'First Name should be at least 2 characters long' }),
  lname: z.string().min(2, { message: 'Last Name should be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
  phno: z.string().min(10, { message: 'Phone Number should be at least 10 characters long' }),
  date: z.string().length(10, { message: 'Invalid date format' }), // You may want to adjust the date validation
  petname: z.string().min(2, { message: 'Pet Name should be at least 2 characters long' }),
  petage: z.string().min(1, { message: 'Pet Age should be at least 1 character long' }),
  petweight: z.string().min(1, { message: 'Pet Weight should be at least 1 character long' }),
  typeofpet: z.string().min(2, { message: 'Type of Pet should be at least 2 characters long' }),
  anymessage: z.string().min(2, { message: 'Any Message should be at least 2 characters long' }),
});

module.exports = bookYourAppValidator;
