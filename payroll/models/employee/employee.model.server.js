var mongoose = require('mongoose');
var employeeSchema = require('./employee.schema.server');
var employeeModel = mongoose.model('employeeModel', employeeSchema);


var employees = {
    createEmployee: createEmployee,
    findAllEmployees: findAllEmployees,
    findEmployeeById: findEmployeeById,
    updateEmployee: updateEmployee,
    findEmployeeByEmployeeName: findEmployeeByEmployeeName,
};

function createEmployee(employee) {

    console.log("inserting in model");
     if (employee.img_path === '' || employee.img_path === undefined) {
        employee.img_path = "https://image.shutterstock.com/image-vector/vector-avatar-icon-260nw-383411185.jpg"
    }
    employee.employee_takeHomeSalary = employee.employee_salary - employee.employee_healthPremium - employee.employee_lifePremium
    - employee.employee_retirementPlan;
    return employeeModel
        .create(employee);

}


function findEmployeeById(employeeId) {

    return employeeModel
        .findById(employeeId);

}

function findEmployeeByEmployeeName(employeename) {

    return employeeModel
        .findOne({employeename: employeename});

}


function updateEmployee(employeeId, employee) {
    if (employee.img_path === '' || employee.img_path === undefined) {
        employee.img_path = "https://image.shutterstock.com/image-vector/vector-avatar-icon-260nw-383411185.jpg"
    }
    return employeeModel.update({_id: employeeId}, {

        $set: {
            employee_name: employee.employee_name,
            employee_bio: employee.employee_bio,
            employee_department: employee.employee_department,
            employee_designation: employee.employee_designation,
            employee_salary: employee.employee_salary,
            img_path: employee.img_path,
            employee_healthPremium: employee.employee_healthPremium,
            employee_lifePremium: employee.employee_lifePremium,
            employee_retirementPlan: employee.employee_retirementPlan,
            employee_emailId: employee.employee_emailId,
            employee_phone: employee.employee_phone,
            employee_takeHomeSalary: employee.employee_salary - employee.employee_healthPremium - employee.employee_lifePremium
                                    - employee.employee_retirementPlan
        },
    });
}

function findAllEmployees() {

    return employeeModel
        .find();

}

module.exports = employees;
