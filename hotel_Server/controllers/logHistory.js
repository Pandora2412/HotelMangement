const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logHistory = async (req, res) => {
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${req.params.history}\n`;
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'history.txt'), logItem);
    res.sendStatus(200);
}

module.exports = logHistory;

