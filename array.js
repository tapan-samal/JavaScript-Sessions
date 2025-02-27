// Array
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Jane", "Jack", "Jill"];

console.log(numbers[0]);

console.log(names.length);
console.log(names.length - 1);

console.log(names[0]);
console.log(names[names.length - 1]);

//Push : add an element to the end of the array
numbers.push(6);
console.log(numbers);

//Pop : remove an element from the end of the array
numbers.pop();
console.log(numbers);

//Unshift : add an element to the beginning of the array
numbers.unshift(0);
console.log(numbers);

//Shift : remove an element from the beginning of the array
numbers.shift();
console.log(numbers);

console.clear();
var numbers = [1, 2, 3, 4, 5, 6];
//slice : create a new array from a portion of an existing array
//Create a new array from source array
//Syntax : slice(startIndex, endIndex(exclude))
var nums = numbers.slice(1, 4);
console.log(nums);
console.log(numbers);
var nums2 = numbers.slice(1);
console.log(nums2);
var cloneNumbers = numbers.slice(0);
console.log(cloneNumbers);

//splice : remove elements from an array and, if necessary, replace them
//It does not create new array, it modifies the existing array
// Return deleted elements
//Syntax : splice(startIndex, deleteCount, item1, item2, item3, ...)
var removed = numbers.splice(1, 2);
console.log(removed);
console.log(numbers);
var deleteNums = numbers.splice(1, 0, 2, 3, 4);
console.log(deleteNums);
console.log(numbers);

var replaceNums = numbers.splice(1, 2, 20, 30, 40);
// [1, 2, 3, 4, 4, 5, 6];
// [1, 4, 4, 5, 6];
// [1, 20, 30, 40, 4, 4, 5, 6];
console.log(replaceNums);
console.log(numbers);

var names = ["John", "Jane", "Jack", "Jill"];
var addNames = names.splice(3, 0, "Mary", "Mike");
console.log(names);

console.clear();

let nums1 = [1, 2, 3, 4, 5, 6];
//For each loop : iterate through each element of an array to transform the array
// It does not return anything
let nums22 = nums1.forEach((num) => console.log(num * 2));
console.log(nums22);

//Map ; performing a function on each array element to transform the array
// It returns a new array

// let nums33 = nums1.map(num => num ** 2);
let nums33 = nums1.map(function (num) {
  return num ** 2;
});

console.log(nums33);

//Filter : create a new array from a subset of an existing array
let filterNums = nums1.filter((num) => num > 2);
console.log(filterNums);

//Reduce : reduce an array to a single value
// let sum = nums1.reduce((acc, num) => acc + num);
let sum = nums1.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(sum);

let largest = nums1.reduce((acc, num) => (acc > num ? acc : num));
console.log(largest);

//concat : merge two or more arrays
let n1 = [1, 2, 3];
let n2 = [4, 5, 6];
console.log(n1.concat(n2, [7, 8]));
console.log([...n1, ...n2, 7, 8]);
console.log(n1.slice(0).concat(n2));

//indexOf : find the index position of an element in an array
console.log(n1.indexOf(2));

//includes : check if an element exists in an array
console.log(nums1.includes(2));
console.log(nums1.includes(20));

//join : convert a string from an array
console.log(n1.join());
let str = "Hello World";
console.log(str.split(" ").join(" "));

//reverse : reverse the order of an array
console.log(str.split(" ").reverse().join(" "));
console.log(n1.reverse().join(", "));

//sort : sort the elements of an array
// default sort is ascending order(alphabetical order)
let fruits = ["Banana", "Orange", "Apple", "Mango", "Banana"];
console.log(fruits.sort());

let numss = [1, 2, 10, 20, 5, 3, 4];
console.log(numss.sort((a, b) => a - b));
// a = 1, b = 2,
 // a = 2, b = 10, 
// console.log(numss.sort((a, b) => b - a));

//flat : create a new array with all sub-array elements concatenated into it recursively up to the specified depth

let arry = [1, 2, [3, 4, [5, 6]]];
console.log(arry.flat(Infinity));



