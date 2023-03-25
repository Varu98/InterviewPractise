let count = 0;
setTimeout(function () {
  count++;
  // count = 1
  console.log(`In setTimeout - ${count}`);
});
// count = 0
console.log(count);
