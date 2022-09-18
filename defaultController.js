const errorFunction = require('./../utils/errorFunction.js');

const defaultController = async (req, res, next) => {
    res.status(200);
    res.json(errorFunction(false, "Home Page"));
}

module.exports = defaultController