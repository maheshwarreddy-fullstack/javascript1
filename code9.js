//Synchronous Callback



function Belongings(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

Belongings('Alice', sayGoodbye);


     // Asynchronous Callback


console.log('Start');

setTimeout(function() {
  console.log('mahesh');
}, 5000);

console.log('End');