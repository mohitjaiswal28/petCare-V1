
const { z } = require('zod');

const userRegValidator = z.object({

    // Personal Information
    name: z.string().min(2, { message: 'Name should be at least 2 characters long' }).max(50, { message: 'Name should not exceed 50 characters' }),

    email: z.string().email({ message: 'Invalid email format' }),

    gender: z.string(),

    phno: z.string().min(10, { message: 'Phone number should be at least 10 characters long' }).max(15, { message: 'Phone number should not exceed 15 characters' }),

    // Pet Information
    petname: z.string().min(3, { message: 'Pet name should be at least 3 characters long' }).max(50, { message: 'Pet name should not exceed 50 characters' }),

    petage: z.string().min(1, { message: 'Pet age should be at least 1 character long' }).max(20, { message: 'Pet age should not exceed 5 characters' }),

    petweight: z.string().min(1, { message: 'Pet weight should be at least 1 character long' }).max(100, { message: 'Pet weight should not exceed 5 characters' }),

    typeofpet: z.string(),

    password: z.string().min(5, { message: 'Password should be at least 5 characters long' }).max(20, { message: 'Password should not exceed 20 characters' }),
});

module.exports = userRegValidator;
