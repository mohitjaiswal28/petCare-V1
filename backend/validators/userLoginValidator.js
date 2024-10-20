
const { z } = require('zod');

const userLoginValidator = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string().min(5, { message: 'Password should be at least 5 characters long' }).max(20, { message: 'Password should not exceed 20 characters' }),
});

module.exports = userLoginValidator ;
