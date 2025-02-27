//Normal Function/Regular function
// function myFunction () {
//     console.log("Execute the function");
// }
// myFunction();

// let name = "JavaScript";

// console.log(addition(12, 10, 15));

// function addition(n1, n2) {
//     console.log(n1);
//     console.log(n2);
//     return n1 + n2;
//     console.log(this.name);

// }

//Arguments: Actual value/expression, sequence and nos
//Parameters: variables/place holder, sequence and nos

//Arrow Function/Fat Arrow Function

// let subtraction = (n1, n2) => {
//     return n1 - n2;
// }
// console.log(subtraction(20, 10));

// const multiplication = (n1, n2) => n1 - n2;
// console.log(multiplication(20, 10));

//Regular: Function keyword, explict, this, hoisting, constructor, arguments
//Arrow: Arrow Symbol, implicit

//Anonymous Function : without name, single use

// let anynomFunction = function(){
// }

// let anynmFunction = () => {
// }

// if (condition) {
//     let name1 = "Block Scope";
// }

//Callback Function
function mainFunction(name, cbFunc) {
  console.log("Hello, " + name);

  cbFunc();
  console.log("Operation End");
}

function greet() {
  console.log("Good Bye");
}
mainFunction("Chinu", greet);

//Higher function
const calculate = (n1, n2, cb) => {
  return cb(n1, n2);
};

//cb Fun
const add = (n1, n2) => {
  return n1 + n2;
};

//cb Fun
const multiply = (n1, n2) => {
  return n1 * n2;
};

console.log(calculate(5, 8, add));

console.log(calculate(5, 8, multiply));


//IIFE
(function name() {
    let password = "Password@123"
    
    console.log(password);
    console.log("Execute IIFE function");
})();

//Pure Function
function pureFunc(a, b) {
    return a / b;
}
console.log(pureFunc(20, 5));


//Currying Function
function addNumbers(n1) {
    console.log(n1);
    return function(n2) {
        return n1 + n2;
    }
}
const addFunc = addNumbers(10);
console.log(addFunc(5));
console.log(addFunc(20));

