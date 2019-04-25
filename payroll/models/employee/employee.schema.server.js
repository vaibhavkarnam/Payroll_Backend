var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
        employee_name: String,
        employee_bio: String,
        employee_department: String,
        employee_designation: String,
        employee_salary: Number,
        img_path: String,
        employee_healthPremium: Number,
        employee_lifePremium: Number,
        employee_retirementPlan: Number,
        employee_emailId: String,
        employee_phone: String,
        employee_takeHomeSalary: Number
    },
    {collection: 'employee'});

module.exports = employeeSchema;
