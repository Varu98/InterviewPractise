function a() {
  let fn;
  {
    var x = 5;
    fn = function () {
      console.log(x);
    };
  }

  return fn;
}

var x = 10;
const b = a();
b();
