for (var i = 0; i < 3; i++) {
  function closure(x) {
    setTimeout(function () {
      console.log(x);
    }, 5000);
  }
  closure(i);
}
// 3

// Understanding
/* 
Basically here var is making the i variable to be declared in the module scope or here the parent scope of the for loop.

So Once the loop has executed the 
*/

// To get 0, 1 and 2 in the above for loop we have to replace var with let...

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 3000);
}
