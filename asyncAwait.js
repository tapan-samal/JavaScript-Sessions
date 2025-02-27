//Async / await

// const ppp = new Promise((res, rej) => {

//     setTimeout(() => {
//         // res("Data received");
//         rej("Data not received");
//     }, 1000);
// })

// async function getData() {
//     return ppp;
// }

// const data = getData();
// console.log(data);

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved!");
  }, 5000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved!");
  }, 10000);
});

// function getData() {
//   promise1.then((data) => {
//     console.log(data);
//   });
//   console.log("Print Meeeeeeeeee");
// }
// getData();

// async function handleAsyncFunc() {

//     console.log("async func execution start");

//     const value = await promise1;
//     console.log("Print Meeeeeeeeee");
//     console.log(value);

//     const value2 = await promise2;
//     console.log("Print Meeeeeeeeee222");
//     console.log(value2);
// }
// handleAsyncFunc();

//Promise Chaining
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved 3");
  }, 2000);
});

function promise4() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise resolved 4");
    }, 5000);
  });
}

// promise3.then((res) => {
//     console.log(res);
//     return promise4;

// }).then((res) => {
//     console.log(res);
// })

const fetchData = async () => {
  try {
    const res1 = await promise3;
    console.log(res1);

    const res2 = await promise4();
    console.log(res2);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
