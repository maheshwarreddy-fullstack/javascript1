//functions
        
        function firstfunction (){
    console.log("hello world");
    
}

firstfunction();




             //prepare teh iife
(
    (param1, age) => {
        console.log("hello world 1");
        console.log("hello world 2");
        console.log("hello world 3");
        console.log("hello world 4");
        console.log(param1);
        console.log(age);
    }
                             )
("hello world 5", 20);