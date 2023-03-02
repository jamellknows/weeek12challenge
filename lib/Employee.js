// TODO: Write code to define and export the Employee class
 class Employee {
    constructor(name,id,email){
        this.name = name ? name : null
        this.id = id ? id : null
        this.email = email ? email : null
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = {Employee: Employee}


