class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; 
    }
    // gets name from Input 
    getName() {
        return this.name
    }

    //gets ID from input 
    getId() {
        return this.id
    }

    // gets email from input 
    getEmail() {
        return this.email
    }
    
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;