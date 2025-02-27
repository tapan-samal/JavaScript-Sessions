//If/Else
let age = " ";
if (age >= 18) {
  console.log("you can vote!");
} else if (age < 18) {
  console.log("You cann't vote!");
} else {
  console.log("Indian Citizen");
}

//Switch Case
let color = "Yello";
switch (color) {
  case "Green":
    console.log("Go");
    break;
  case "Yellow":
    console.warn("Slow Down");
    break;
  case "Red":
    console.error("Stop");
    break;
  default:
    console.log("Follow trafic person");
}

//Tarnary
let agee = 10;
let result = agee >= 18 ? "Adult" : "Minor";
console.log(result);

let num;

function add(n1, n2 = 15) {
  // "use strict"
  n1 = 10;
  // n2 = 15;
  console.log(n1 + n2);
}
add(5);

var a = []; 
var b = [];
console.log(a == b);
console.log(a === b);

console.log( 1 < 2 < 3);  // 1 < 2 = > true = 1 < 3 = > true 
console.log( 3 > 2 > 1);  // 3 > 2 = > true = 1 > 1 = > false



