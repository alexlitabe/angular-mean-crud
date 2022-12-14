const express = require('express');
const app = express();
const employeeRoute = express.Router();
let Employee = require('../model/Employee')

// Add Eployee
employeeRoute.route('/add-employee').post((req, res, next) => {
    Employee.create(req.body, (error, data) => {
        if (error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
});

// Get all Employees
employeeRoute.route('/').get((req, res) => {
    Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Employee by id
employeeRoute.route('/read-employee/:id').get((req, res) => {
    Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Update Employee
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body 
    }, (error, data) =>{
            if (error) {
      return next(error)
      console.log(error)
    } else {
      res.json(data)
      console.log('Employee updated successfully!')
    }
  })
})

// Delete Book
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
    Employee.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = employeeRoute;