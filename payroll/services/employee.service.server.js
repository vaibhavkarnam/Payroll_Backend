var app = require('../../express');

app.get('/api/payroll/employee', findAllEmployees);
app.get('/api/payroll/employee/:employeeId', findEmployeeById);
app.get('/api/payroll/employee/employeename/:employeeName', findEmployeeByEmployeename);
app.post('/api/payroll/employee', createEmployee);
app.put('/api/payroll/employee/update', updateEmployee);
app.put('/api/payroll/employee/:employeeId/update', updateEmployeeById);

var employeeModel = require('../models/employee/employee.model.server');


function updateEmployee(req, res) {
    var employee = req.body;
    var id = employee._id;
    employeeModel.updateEmployee(id, employee)
        .then(function () {
            res.send(employee);
        })
}

function updateEmployeeById(req, res) {
    var employee = req.body;
    var id = req.params['employeeId'];
    employeeModel.updateEmployee(id, employee)
        .then(function () {
            res.json(employee);
        })
}

function findEmployeeById(req, res) {
    var id = req.params['employeeId'];
    employeeModel.findEmployeeById(id)
        .then(function (employee) {
            res.json(employee);
        })
}

function findEmployeeByEmployeename(req, res) {
    var employeeName = req.params['employeeName'];
    employeeModel.findEmployeeByEmployeeName(employeeName)
        .then(function (employee) {
            res.json(employee);
        })
}


function createEmployee(req, res) {
    console.log("creating new employee");
    var employee = req.body;
    console.log(employee);
    employeeModel.createEmployee(employee)
        .then(function (employee) {
            console.log(employee);
            res.send(employee);
        })
}

function findAllEmployees(req, res) {
    employeeModel.findAllEmployees()
        .then(function (employees) {
            res.send(employees);
        })
}

