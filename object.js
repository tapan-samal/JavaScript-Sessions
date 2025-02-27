//Object
//Literal Notation
//Constructor Notation
//Object.create()
let user = {
  "first name": "John",
  "age": 30,
  "location": "USA",
  1: "One",
  address: {
    "street": "123 Main St",
    "city": "New York",
    "zip": 10001
  },
};


console.log(user["first name"]); 
console.log(user.address.city);

console.log(user["age"]);
console.log(user.address["zip"]);

//Create Object using Constructor Notation
    function User(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

let user1 = new User("John", 30, "USA");
console.log(user1);

//Object.create()
let user2 = Object.create({});
user2.name = "John";
user2.age = 30;
user2.location = "USA";
delete user2.age;
console.log(user2);

//Object.keys()
Object.keys(user).forEach(function(key) {
    console.log(key, user[key]);
    });
console.log(Object.keys(user));

// Object.values(user).forEach(function(value) {
//     console.log(value);
//     });    

console.log(Object.values(user));

// let arr = ["John", 30, "USA"];
let newObj = Object.entries(user2);
console.log(newObj);
console.log(Object.fromEntries(newObj));

//Object.assign()
let user3 = Object.assign({}, user2, user);
user3.name = "Smith";
console.log(user3);
console.log(user);

//Date
let date = new Date();
console.log(date)

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log("_______");

console.log(date.getHours()); 
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(date.toDateString()); // Example Output: Mon Feb 17 2025
console.log(date.toTimeString()); // Example Output: 10:30:45 GMT+0000
console.log(date.toUTCString());  // Example Output: Mon, 17 Feb 2025 10:30:45 GMT
console.log(date.toISOString());  // Example Output: 2025-02-17T10:30:45.123Z
console.log(date.toLocaleDateString()); // Example Output: 2/17/2025 (Format varies by locale)
console.log(date.toLocaleTimeString()); // Example Output: 10:30:45 
