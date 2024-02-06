// Day 12: Inheritance 


class Student extends Person {
    
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores    
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
        
}