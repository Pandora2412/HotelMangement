const userDB = {
    users: require('../model/user.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const bcrypt = require('bcrypt');

const handdleLogin = async (req,res) => {
    const {user, pwd} = req.body;
    if (!user || !pwd) return res.status(400).json({'message': 'Username or password missing!'});

    // check username and password
    const account = userDB.users.find(person => person.username === user);
    if (!account) return res.sendStatus(401); //unauthorized
    
    // evaluate password
    const match = await bcrypt.compare(pwd, account.password);
    if (!match) return res.sendStatus(401); 

    res.status(200).json({'message': `Log in successfully as ${user}!`})
}

module.exports = { handdleLogin };