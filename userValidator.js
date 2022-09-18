const Joi = require("joi");

const validation = Joi.object({
    firsName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
})

const userValidation = async (req, res, next) => {
    const payload = {
        firsName: req.body.firsName,
        lastName: req.body.lastName
    }
}

const {error} = validation.validate(payload);

if (error) {
    res.status(406);
    return res.json(errorFunction(true, `Error in User Data : ${error.message}`))
} else {
    next();
}

module.exports = userValidation