
//1] var variable => Function Scoped
// console.log("name is:" + names);

// var names  = "Nilesh";   //re-declaration is allowed

// var names = "Kasane";

// var names = "Pune";

// console.log("name is:" + names);

// var x = 10;

// var x = 20;  //re-declartion is allowed 

// x = 30;  //re-assignment or upadte is allowed

// console.log(x);


//2]let variable => Block scoped
// console.log(age);

let age = 25;  

// let age = 26;  //re-declaration is not allowed

age = 27;  //re-assignment or update is allowed
// age = 28;

console.log(age);


//3] const variable =>Block scoped
// console.log(pi);

// const pi = 3.14;

// const pi = 3.15 //re-declartion is not allowed
// pi = 3.15; //re-assignment or update is not allowed

// console.log(pi);


