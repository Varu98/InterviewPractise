const firstPromise = new Promise((resolve, reject) => {
  resolve("firstPromise");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve("Second!");
});

// Exercise 1: Write code to return a single Promise that resolves to an array of the results.
// Expected Output: ["firstPromise", "Second!"]
// const singlePromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve(["firstPromise", "Second!"]);
//   });
// };
// The approach above is wrong here is the right one...

Promise.all([firstPromise, secondPromise]).then((res) => console.log(res));
// Exercise 2: Write code to return a promise that resolves after both the given promises have been fulfilled.
// It should result in an array of objects that each describes the outcome of both the promises.
// Expected Output:
// [
//   {status: "fulfilled", value: "firstPromise"},
//   {status: "fulfilled", value: "Second!"}
// ]
//
Promise.allSettled([firstPromise, secondPromise]).then((res) =>
  console.log(res)
);
const thirdPromise = new Promise((resolve, reject) => {
  resolve("Second!");
});

const fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("firstPromise");
  }, 2000);
});

// Exercise 4: Consider thirdPromise and fourthPromise for this exercise. Write code to return a promise that
// fulfills as soon as one of the promises fulfill.
Promise.any([thirdPromise, fourthPromise]).then((res) => console.log(res));
// Practise and Learn more promise methods.
