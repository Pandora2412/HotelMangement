const fsPromises = require('fs').promises;
const path = require('path');
const data = {
    employees : require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data; }
};

const getAllEmployees = (req, res) => {
    res.json(data.employees);
}

const createNewEmployee = async (req, res) => {
    
    const newEmployee = {
        "name": req.body.name,
        "startday": req.body.startday,
        "birthday": req.body.birthday,
        "sex": req.body.sex,
        "id": req.body.id,
        "BHXH": req.body.BHXH,
        "email": req.body.email,
        "phone": req.body.phone,
        "address": req.body.address,
        "bank": req.body.bank,
        "bankadd": req.body.bankadd,
        "banknum": req.body.banknum,
        "workday": req.body.workday,
        "worktime": req.body.worktime,
        "dayoff": req.body.dayoff,
        "salary": req.body.salary,
        "job": req.body.job
    }
    
    if (!newEmployee.id) {
        return res.sendStatus(400);
    }

    const duplicate = data.employees.find(e => e.id == newEmployee.id);
    if (duplicate) {
        return res.sendStatus(409); 
    }

    data.setEmployees([...data.employees, newEmployee]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'employees.json'),
        JSON.stringify(data.employees,null," ")
    );

    res.sendStatus(201);
}

const updateEmployee = async (req, res) => {
   
    const match = data.employees.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.sendStatus(400); 
    }

    const duplicate = data.employees.find((e, index) => index !== match && e.id == req.body.id);
    if (duplicate) {
        return res.sendStatus(409);
    }

    const update = req.body;
    if (match === 0) data.setEmployees([...data.employees.slice(1), update]); 
    else if (match === data.employees.length - 1) data.setEmployees([...data.employees.slice(0,-1), update]);
    else data.setEmployees([...data.employees.slice(0, match), ...data.employees.slice(match + 1), update]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'employees.json'),
        JSON.stringify(data.employees,null," ")
    );

    res.sendStatus(204);
}

const deleteEmployee = async (req, res) => {

    const match = data.employees.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.sendStatus(400); 
    }
    data.setEmployees(data.employees.filter(e => e.id !== req.params.id));
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'employees.json'),
        JSON.stringify(data.employees,null," ")
    );

    res.sendStatus(204);
}

const getEmployee = (req, res) => {

    const match = data.employees.findIndex(e => e.id == req.params.id);
    if (match === -1) {
        return res.sendStatus(400); 
    }

    res.json(data.employees[match]);
}

module.exports = {
    getAllEmployees, 
    createNewEmployee, 
    updateEmployee, 
    deleteEmployee,
    getEmployee
}