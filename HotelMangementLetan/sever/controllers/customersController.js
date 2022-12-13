const fsPromises = require('fs').promises;
const path = require('path');
const data = {
    customers : require('../model/customers.json'),
    setCustomers: function (data) { this.customers = data; }
};

const getAllCustomers = (req, res) => {
    res.json(data.customers);
}

const createNewCustomer = async (req, res) => {
    
    const newCustomer = {
        "name": req.body.name,
		"id": req.body.id,
		"phone": req.body.phone,
		"email": req.body.email,
		"sex": req.body.sex,
        "bday": req.body.bday,
		"score": 0,
		"rank": "Bronze"
    }
    
    if (!newCustomer.id) {
        return res.sendStatus(400);
    }

    const duplicate = data.customers.find(e => e.id == newCustomer.id)
    if (duplicate) {
        return res.sendStatus(409); 
    }

    data.setCustomers([...data.customers, newCustomer]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'customers.json'),
        JSON.stringify(data.customers,null," ")
    );

    res.sendStatus(201);
}

const updateCustomer = async (req, res) => {
   
    const match = data.customers.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.sendStatus(400); 
    }

    const duplicate = data.customers.find((e, index) => index !== match && e.id == req.body.id);
    if (duplicate) {
        return res.sendStatus(409);
    }
    
    const update = {};
    update.name = req.body.name;
	update.id = req.body.id;
	update.phone = req.body.phone;
	update.email = req.body.email;
	update.sex = req.body.sex;
    update.bday = req.body.bday;
	update.score = data.customers[match].score + Math.round(req.body.pay / 10000);
	update.rank = update.score < 200?"Bronze":update.score < 500?"Silver":update.score < 1000?"Gold":"Diamond"; 
    if (match === 0) data.setCustomers([...data.customers.slice(1), update]); 
    else if (match === data.customers.length - 1) data.setCustomers([...data.customers.slice(0,-1), update]);
    else data.setCustomers([...data.customers.slice(0, match), ...data.customers.slice(match + 1), update]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'customers.json'),
        JSON.stringify(data.customers,null," ")
    );

    res.sendStatus(204);
}

const deleteCustomer = async (req, res) => {

    const match = data.customers.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.sendStatus(400); 
    }
    data.setCustomers(data.customers.filter(e => e.id !== req.params.id));
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'customers.json'),
        JSON.stringify(data.customers,null," ")
    );

    res.sendStatus(204);
}

const getCustomer = (req, res) => {

    const match = data.customers.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.json({});
    }

    res.json(data.customers[match]);
}

module.exports = {
    getAllCustomers, 
    createNewCustomer, 
    updateCustomer, 
    deleteCustomer,
    getCustomer
}