//Loop
// Loops are used to execute a set of intruction or code repeatedly,
// untill a certain condition is met
// Infinite loop: A loop that never ends. <br />
// Types of Loop : for, while, do-while, for of, for in.

//For Loop
// The for loop has three parts, separated by semicolons:
// execute upto Certain number of times
// for (Initialization; Condition; Increment/Decrement) {code block to be executed}

//Example 1: Print name 5 times
console.log("Loop Start");

for (let i = 0; i < 5; i++) {
  console.log("Hello World:" + (i + 1));
}
console.log("Loop end");

//Example: Sum of 1 to 10
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log("Sum of 1 to 10 is: " + sum);

//Example: Print 1 to 5
for (let i = 1; i <= 5; i++) {
//   console.log(i);
}

//While Loop
// The while loop loops through a block of code as long as a specified condition is true.

let n = 1;
while(n <= 5){
    console.log(n);
    n++;
}

//Do-While Loop
// The do/while loop is a variant of the while loop. 
// This loop will execute the code block once, before checking if the condition is true,
//  then it will repeat the loop as long as the condition is true.
let n1 = 5;
do{
    console.log(n1);
    n1--;
}while(n1 > 0);

//For of Loop
// The for...of statement creates a loop iterating over iterable array and string.
// for (variable of iterable) {code block to be executed}   
let arr = [11,22,33,44,55];
for(let val of arr){
    console.log(val);
}

//Only return index
for(let item in arr){
    console.log(item);
}

let str = "Helo";
for(let val of str){
    console.log(val);
}

//For in Loop
// The for...in statement iterates over the enumerable properties of an object.
let obj = {a:10, b:20, c:30};
for(let val in obj){
    console.log(`key: ${val}: value: ${obj[val]}`);
}

console.log(obj.b);
console.log(obj["c"]);


//Print value 0 to 50 which is divisible by 5
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        // console.log(i);
    }
}
