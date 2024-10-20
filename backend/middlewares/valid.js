
const userRegValid = (userRegValidator) => async (req, res, next) => {

    try {
        const parsedBody = await userRegValidator.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        res.status(422).json({ msg: error.errors });
    }
};


const userLoginValid = (userLoginValidator) => async (req, res, next) => {

    try {
        const parsedBody = await userLoginValidator.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        res.status(422).json({ msg: error.errors });
    }
};


module.exports = {userRegValid, userLoginValid};
