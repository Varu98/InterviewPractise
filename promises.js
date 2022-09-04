// firstFunction(function (result) {
//   secondFunction(
//     result,
//     function (newResult) {
//       thirdFunction(
//         newResult,
//         function (finalResult) {
//           console.log("final result: " + finalResult);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// This is an example of callback hell . Make this code better and readable using ES6 Syntax

firstFunction((result) => secondFunction(result))
  .then((newResult) => thirdFunction(newResult))
  .then((finalResult) => console.log("Final Result: " + finalResult));
