//Asynchronous
//Callback => Promise => Async/wait
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// const calculate = (cf) => {
//   console.log("Start the Calculate Func");
//   cf(); //Api call
//   console.log("End the Calculate Func");
// };

// const cf = () => {
//   return 5 + 7;
//   //Another
// };
// calculate(cf);

//console.log(1);
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

// Event Loop : Event Quiee(microtask quee and macrotask) => Call Stack

//Callback hell

// const task1 = (callback) => {
//   console.log("Start Execution");
//   setTimeout(() => {
//     console.log("Task 1 Completed");
//     callback("Task 1 Result");
//   }, 2000);
// };
// const task2 = (input, callback) => {
//   setTimeout(() => {
//     console.log("Task 2 Completed: ", input);
//     callback("Task 2 Result");
//   }, 4000);
// };

// const task3 = (input, callback) => {
//   setTimeout(() => {
//     console.log("Task 3 Completed: ", input);
//     callback("Task 3 Result");
//   }, 6000);
// };

// task1(function (result1) {
//   task2(result1, function (result2) {
//     task3(result2, function (result3) {
//       console.log("All Task completed!");
//     });
//   });
// });

