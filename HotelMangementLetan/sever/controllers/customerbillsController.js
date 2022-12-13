const fsPromises = require('fs').promises;
const path = require('path');
const data = {
    customerbills : require('../model/customerbills.json'),
    setCustomerbills: function (data) { this.customerbills = data; }
};

const getNewFormNum = (req, res) => {
    const num = (data.customerbills.length + 10001).toString();
    res.json('ABC'+num.slice(1));
}

const createNewForm = async (req, res) => {

    const newForm = req.body;

    const duplicate = data.customerbills.find(e => e.formnum == newForm.formnum);
    if (duplicate) {
        return res.sendStatus(409); 
    }

    data.setCustomerbills([...data.customerbills, newForm]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'customerbills.json'),
        JSON.stringify(data.customerbills,null," ")
    );

    res.sendStatus(201);
}

const updateForm = async (req, res) => {
    
    const update = req.body;

    const match = parseInt(req.body.formnum.slice(3)) - 1;
    if (match >= data.customerbills.length) res.sendStatus(400);
    
    if (match === 0) data.setCustomerbills([update, ...data.customerbills.slice(1)]); 
    else if (match === data.customerbills.length - 1) data.setCustomerbills([...data.customerbills.slice(-1), update]);
    else data.setCustomerbills([...data.customerbills.slice(0, match), update, ...data.customerbills.slice(match + 1)]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'customerbills.json'),
        JSON.stringify(data.customerbills,null," ")
    );

    res.sendStatus(204);
}

const getForm = (req, res) => {

    const match = parseInt(req.params.formnum.slice(3)) - 1;
    if (match >= data.customerbills.length) res.sendStatus(400);

    res.json(data.customerbills[match]);
}

module.exports = {
    getNewFormNum, 
    createNewForm, 
    updateForm, 
    getForm
}