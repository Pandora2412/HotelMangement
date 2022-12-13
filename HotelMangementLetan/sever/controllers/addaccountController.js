const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handdleNewUser = async (req,res) => {
    const {user, pwd, roles} = req.body;
    if (!user || !pwd) return res.sendStatus(400);

    // check username duplication
    const duplicate = userDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409); //Conflict
    
    try {
        // encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        // store new user
        const newUser = {
            "username": user,
            "password": hashedPwd,
            "roles": roles
        }
        userDB.setUsers([...userDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'), 
            JSON.stringify(userDB.users, null, " ")
        );
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = { handdleNewUser };