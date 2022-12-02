const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handdleRefreshToken = (req,res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    // check token
    const account = userDB.users.find(person => person.refeshToken === refreshToken);
    if (!account) return res.sendStatus(403); //forbidden
    
    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || account.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(account.roles);
            const accessToken = jwt.sign(
                { 
                    "UserInfo": {
                        "username": account.username,
                        "roles": roles 
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            res.json({ accessToken });  
        }
    )
}

module.exports = { handdleRefreshToken };