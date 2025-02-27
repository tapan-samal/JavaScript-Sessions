//Data Types
//Primitive
// Number, String, Boolean, Undefined, Null, BigInt, Symbol

// Number
let age = 20;
console.log(age);
console.log("Data Type of Number: ", typeof age);

// String, 
let name = "data 'type' of JS";
let name1 = 'data type';
let name3 = `data type `;

let name2 = "20";
console.log(name);

console.log("Data Type of String: ", typeof name);

// let location = "ahsdha":
// location = "jkdkfds";

// Booleans, 
let isLogin = true;
console.log(isLogin);
console.log("Data Type of Boolen: ", typeof isLogin);

// Undefined,
let data;
console.log(data);
console.log("Data Type of undefined: ", typeof data);

// Null, 
let err = null;
console.log(null);
console.log("Data Type of Null: ", typeof null);

// BigInt 
let num = BigInt("123456789123456");
console.log(num);

// Symbol
let smbl1 = Symbol("abcdef1");
let smbl2 = Symbol("abcdef2");
console.log(smbl1 === smbl2);

let diff = "22" - 10;
console.log(diff);

let diff2 = "22" * 10;
console.log(diff2);

let diff1 = "22" + 10;
console.log(diff1);

let str1 = "abc";
let str2 = "xyz";
console.log(str1 + str2);


//Not-Primitive
// Object
let obj = {
    "name": "Chinu",
    "age" : "20",
    "15" : 150,
    symbl : Symbol("12345"),
    id: 123457
}
console.log(obj);
console.log(typeof obj);

// Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
