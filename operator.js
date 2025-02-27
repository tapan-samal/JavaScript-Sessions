///Operator
//Arithmetic Operator

//Addition
let n1 = 20;
let n2 = 30;
let sum = n1 + n2;
console.log(sum);

//Subtraction
let n11 = 20;
let n22 = 30;
let sum1 = n1 - n2;
console.log(sum1);

//Multiplication
let n111 = 20;
let n222 = 30;
console.log(n1 * n2);

//Division
let n3 = 60;
let n4 = 30;
console.log(n3 / n4);

//Exponentiation
let n33 = 10;
let n44 = 3;
console.log(n33 ** n44);

//Modulus
let n333 = 10;
let n444 = 3;
console.log(n333 % n444);

//Increment
let count = 10;
console.log(count++);
console.log(count + 1);
console.log(++count);
console.log(count);

//Increment
let count1 = 10;
console.log(count1--);
console.log(--count1);
console.log(count1);

var a = 1;
var b = 2;
console.log(++a === b); 
console.log(--b === a); 
console.log(a-- === b); 
console.log(b++ === a); 


//Assigning Operator
let aa = 5;
// aa + 3 = 8
aa += 3
console.log(aa);

let bb = 6;
//bb - 3 = 3
bb -= 3;
console.log(bb);

let cc = 10;
//cc * 2 = 20
cc *= 2;
console.log(cc);

let dd = 10;
//dd / 5 = 2
dd /= 5;
console.log(dd);

//Comparision Operator
//==, loose equality, compare value and data type, type conversion
//===, strict equality, compare value and data type, type conversion not allowed

let a1 = 20;
let b1 = 10;
let b2 = "10";
console.log(a1 > b1);
console.log(a1 < b1);
console.log(a1 >= b1);
console.log(a1 <= b1);
console.log(b1 == b2);
console.log(a1 != b1);
console.log(b1 === b2);
console.log(b1 ==! b2);


var a = 1;
var b = 1;
var c = 2;
console.log((a === b) == --c);  //true
console.log((a === b) === --c); //false
console.log( a=== b);


//Logical Operator(&& , ||)
let x1 = 10;
let y1 = 15;
let z1 = 20;
console.log(x1 != y1 || z1);

console.log(x1 != y1 && z1);
console.log(x1 == y1 && z1);
console.log(x1 == y1 || z1);
console.log(z1 && x1 == y1);




