var a = 100;
function abc(x) {
  var a = 10;
  return function (y) {
    return a + y;
  };
}

a = 50;

var inner = abc(20);

function foo() {
  var a = 30;
  console.log(inner(5));
}

foo();
