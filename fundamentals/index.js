// let word1 = "Victor";
// let word2 = "Kituku";
// let num1 = 2;
// let num2 = 3;

// let example = `${word1}
// ${word2}`;
// document.getElementById("example").innerText = example;

// // let fullName = `${num1 + num2} ${word2}`;
// // console.log(fullName);

// const personalInformation = {
//   firstName: "Victor",
//   lastName: "Kituku",
//   town: "Kikuyu",
//   county: "Kiambu",
//   zipcode: 9023,
// };

// const { firstName: fn, lastName: ln } = personalInformation;

// // console.log(`${fn} ${ln}`);

// let [firstn, middlen, lastn] = ["Victor", "LLM King", "Kituku"];

// // console.log();

// // function addressMaker(city, state) {
// //   const newAddress = { city, state };
// //   console.log(newAddress);
// // }

// // addressMaker("Naivasha", "Nakuru");

// function addressMaker(address) {
//   const newAddress = {
//     city: address.city,
//     state: address.state,
//     country: "United States",
//   };
//   const { city, state, country } = newAddress;
//   console.log(city, state, country);
// }

// // addressMaker({ city: "Austin", state: "Texas" });

// // let incomes = [62000, 67000, 75000];
// // let total = 0;

// // for (const income of incomes) {
// //   console.log(income);
// //   total += income;
// //   console.log(total);
// // }

// // console.log(total);

// // let fullName = "Victor LLM King Kituku";
// // for (const name of fullName) {
// //   console.log(name);
// // }

// // let incomes = [62000, 67000, 75000];
// // for (let income of incomes) {
// //   income += 5000;
// //   console.log(income);
// // }

// // console.log(incomes);

// // Spread Operator

// // let example1 = [1, 2, 3, 4, 5, 6, 7, 8];
// // let example2 = [...example1];
// // example2.push(true);
// // console.log(example1);

// // Rest Operator
// // function add(...nums) {
// //   console.log(nums);
// //   let total = 0;
// //   for (let num of nums) {
// //     total += num;
// //   }
// //   console.log(total);
// // }

// // add(3, 4, 5, 6, 6, 7);

// // Callback Functions

// // console.log("1");
// // setTimeout(() => {
// //   console.log("2");
// // }, 0);
// // console.log("3");
// // MAP, FILTER, REDUCE
// const people = [
//   { name: "Dom", age: 35, occupation: "Web developer" },
//   { name: "Amy", age: 26, occupation: "nurse" },
//   { name: "Bruce", age: 55, occupation: "electrician" },
// ];

// const names_map = people.map((person) => person.name);
// console.log(names_map);

// const overThirty = people
//   .filter((person) => person.age >= 29)
//   .map((person) => person.name);
// console.log(overThirty);

// // TotalAge using reduce

// const totalAge = people.reduce((total, person) => {
//   return total + person.age;
// }, 0);

// console.log(totalAge);

// // overThirty.forEach((person) => {
// //   console.log(person.name);
// // });

// const names = ["Victor", "Kituku", "Kyle", "Mwangangi"];

// // names.forEach((name) => console.log(name));
// const myForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     cb(element);
//   }
// };

// myForEach(names, (name) => console.log(name));

// function add(...nums) {
//   let total = nums.reduce((total, num) => {
//     return total + num;
//   });
//   console.log(total);
// }

// add(1, 2, 3);
// // console.log(add(nums_array));

// function add(numArray = []) {
//   let total = 0;
//   numArray.forEach((element) => {
//     total += element;
//   });
//   console.log(total);
// }

// add();

// let numArray = [1, 2, 3, 4, 5];
// console.log(numArray.includes(1));

// const example = {};
// example.firstName = "Victor";

// console.log(example);
import { data } from "./example";
console.log(data);
