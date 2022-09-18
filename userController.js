const User = require('../../models/user.js');

const errorFunction = require('../../utils/errorFunction.js');

const crypto = require('../../crypto/crypto.js');

const Qrcode = require('qrcode');

const profile = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({
            firstName: req.body.firstName
        }).lean(true);
        if (existingUser) {
            res.status(403);
            return
            res.json(errorFunction(true, "User already exist"));
        } else {
            const hashId = await crypto(req.body.id);

            const newUser = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
            
            if (newUser) {
                res.status(201);
                return res.json(errorFunction(false, "user Created", newUser))
            } else {
                res.status(403);
                return res.json(errorFunction(true, "Error creating user))"
            }
        }
    } catch (error) {
        res.status(400);
        console.log(error);
        return res.json(errorFunction(true, "Error Adding user"));
    }
}