//Promise
//Status: Pending: undefined, fullfilled: Results/data, rejected: Error
const myPromise = new Promise((res, rej) => {
  let isLogin = true;
  if (isLogin) {
    res("Data get successfully");
  } else {
    rej("Error occured");
  }
});
//   myPromise
//     .then((data) => {
//       console.log(data);
//     })

//     .catch((err) => {
//       console.log(err);
//     });
//
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve();
    reject("Error Occured");
  });
};
//   let promise = getPromise();
// promise.then(() => console.log("Promise Fulfilled"));
// promise.catch(() => console.error(err));

// const getPromise1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Get Data");
//       resolve("Success")
//     }, 5000);
//   });
// };
// let promise1 = getPromise1();
// promise1.then((data) => console.log(data));
// promise1.catch((err) => console.error(err));

function task1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      res("Result 1");
    }, 2000);
  });
}
function task2(input) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Task 2 completed", input);
      res("Result 2");
    }, 4000);
  });
}
function task3(input) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Task 3 completed", input);
      res();
    }, 2000);
  });
}

//   task1()
//     .then((result1) => task2(result1))
//     .then((result2) => task3(result2))
//     .then(() => (console.log("All task completed")))
//     // .catch((err) => console.log(err));

//Pending, Fulfilled, Rejected
// const promise = new Promise((res, rej) => {
//   console.log("My Promise");
// //   res("Data received");
//     rej("Error found")
// });

// promise
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

const randonPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber > 5) {
      res(randomNumber);
    } else {
      rej("Number less than 5");
    }
  }, 1000);
});

randonPromise
  .then((data) => console.log("Promise Resolved", data))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise completed")
  );
// console.log(randomNumber);

//Promise Methods
//Promise.all([promise1, promise2, promise3]): All Fulfilled
//Promise.allSettled([promise1, promise2, promise3]) : Fulfilled + Reject
//Promise.any([promise1, promise2, promise3]): First Success
//Promise.race([promise1, promise2, promise3]): First fulfilled/reject

const promise1 = new Promise((res, rej) =>
  setTimeout(() => {
    // res("Promise 1 Resolved");
    rej("Error found")
  }, 2000)
);
const promise2 = new Promise((res, rej) =>
  setTimeout(() => {
    res("Promise 2 Resolved");
  }, 1000)
);
const promise3 = new Promise((res, rej) =>
  setTimeout(() => {
    res("Promise 3 Resolved");
    // rej("Error found")
  }, 500)
);

Promise.race([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


//   let timer = setInterval(() => {
//       const randomNumber = Math.ceil(Math.random() * 10);
//       if(randomNumber < 9) {
//           console.log(randomNumber);

//       }
      
//   }, 1000)

//   let clearMemory = () => clearInterval(timer);

