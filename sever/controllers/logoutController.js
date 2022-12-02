const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const fsPromises = require('fs').promises;
const path = require('path');

const handdleLogout = async (req,res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;

    const account = userDB.users.find(person => person.refeshToken === refreshToken);
    if (!account) {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24*60*60*1000 });
        return res.sendStatus(204); 
    }

    const otherUsers = userDB.users.filter(person => person.refeshToken !== refreshToken);
    account.refeshToken = '';
    userDB.setUsers([...otherUsers, account]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(userDB.users,null," ")
    );
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24*60*60*1000 });
    return res.sendStatus(204); 
}

module.exports = { handdleLogout };