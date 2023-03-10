// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const employee = require('./Employee')

class Manager extends employee.Employee{
 
    constructor(name, id, email, officeNumber){
        super(name, id, email)
       
        
        this.officeNumber = officeNumber ? officeNumber : null
    }

    getOfficeNumber(){
        return this.officeNumber
    }
    



    getRole(){
        return "Manager"
    }

}

module.exports = {Manager: Manager}