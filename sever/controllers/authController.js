const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handdleLogin = async (req,res) => {
    const {user, pwd} = req.body;
    if (!user || !pwd) return res.sendStatus(400);

    // check username and password
    const account = userDB.users.find(person => person.username === user);
    if (!account) return res.sendStatus(401); //unauthorized
    
    // evaluate password
    const match = await bcrypt.compare(pwd, account.password);
    if (!match) return res.sendStatus(401); 
    else {
        const roles = Object.values(account.roles);
        // create JWTs 
        const accessToken = jwt.sign(
            { 
                "UserInfo": {
                    "username": account.username,
                    "roles": roles 
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '60s' }
        )
        const refeshToken = jwt.sign(
            { "username": account.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )
        // Saving refresh token with current user
        const otherUsers = userDB.users.filter(person => person.username !== account.username);
        const currentUser = { ...account, refeshToken };
        userDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(userDB.users,null," ")
        );
        res.cookie('jwt', refeshToken, { httpOnly: true, maxAge: 2460*60*1000});
        res.json({roles, accessToken});
    }
}

module.exports = { handdleLogin };