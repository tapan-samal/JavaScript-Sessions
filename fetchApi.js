//Fetch API Call

//Use Promise

let URL = "https://jsonplaceholder.typicode.com/users";

const fetchApi = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((d) => console.log("Name: ", d.name));
    })
    .catch((err) => console.log("Error: ", err));
};
// fetchApi();

//Async/ await

const fetchApiCall = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error: ", err);
  }
};
fetchApiCall();

//Closure
const outerFunction = () => {
  let topic = "Closure.....";

  const innerFunction = () => {
    console.log(topic);
  };
  return innerFunction;
};
let result = outerFunction();
result();

//Curry Function
const sum = (n1) => {
  return function (n2) {
    return function (n3) {
      return function (n4) {
        return n1 + n2 + n3 + n4;
      };
    };
  };
};

console.log(sum(5)(6)(7)(8));
