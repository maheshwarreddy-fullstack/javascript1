//call back function


function getMyLocation(resolve, reject) {
   
    resolve("mahesh");

    reject("rejected");
}

getMyLocation(
    function(Details1) {
        console.log("Resolved:");
        console.log(Details1);
    },
    function(Details1) {
        console.log("Rejected:");
        console.log(Details1);
    }
);