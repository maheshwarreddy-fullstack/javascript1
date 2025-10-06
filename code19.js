class Student
{

     TharunRollNumber  = "105";  


    constructor(){
        console.log("Constructor has executed!!!!");
        console.log("From constructor" , this. maheshRollNumber);
    }


    getEmployee(){
     console.log("Employee Name is : mahesh");
     }

    getStudent(){
        console.log(this);
        console.log("From getStudent method" ,this.maheshRollNumber );
        console.log("Student Name is : mahesh");
    }


    getJohnGrade(){
        console.log("From getGrade method" ,this.maheshRollNumber);
        return "A+";
    }


}


let student = new Student();
student.getStudent();
let jGrade = student.getJohnGrade();
document.writeln(jGrade);