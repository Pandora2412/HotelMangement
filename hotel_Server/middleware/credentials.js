const {whitelist} = require('../config/corsOption');

const credential = (req, res, next) => {
    const origin = req.headers.origin;
    if (whitelist.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    } 
    next();
}

module.exports = credential;