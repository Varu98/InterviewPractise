// function x() {
//   var i = 1;
//   const time = setInterval(() => {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");

//   setTimeout(() => {
//     console.log(time);
//     clearInterval(time);
//   }, 7000);
// }
// x();

// print 1 after 1 second, 2 after 2 seconds
const incrementNumEverySec = () => {
  let number = 0;
  const time = setInterval(() => {
    number += 1;
    console.log(number);
  }, 1000);

  setTimeout(() => {
    clearInterval(time);
  }, 5000);
};

incrementNumEverySec();
