// let sname;

try{
      //sname.toLowerCase();
      let bankName;
      if(bankName){
          bankName = bankName.toUpperCase();
          console.log(bankName);
      }
      else{
          // wantdly i am prepaing the my own error.
          throw new Error("Server is Down.. Please come after few mins...");
      }
}
catch(error){
     console.log(error);
}




// let subjectName;
// if(subjectName){
//     console.log("Js");
// }