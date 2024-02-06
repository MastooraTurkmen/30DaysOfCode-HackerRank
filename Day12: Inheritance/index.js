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

    calculate(){
        const averageScore = this.scores.reduce((sum, acc) =>
        sum + acc, 0) / this.scores.length;
        
        if(averageScore >= 90 && averageScore <= 100){
            return 'O';
        } else if(averageScore >= 80 && averageScore < 90) {
            return 'E';
        } else if(averageScore >= 70 && averageScore < 80) {
            return 'A'
        } else if(averageScore >= 55 && averageScore < 70) {
            return 'P'
        }else if(averageScore >= 40 && averageScore < 55) {
            return 'D'
        }else {
            return 'T'
        }
        
    }
        
}