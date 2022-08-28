// a polyfill is a piece of code (usually Javascript on the web ) used to provide modern functionality on older browsers that do not natively support it.
// - MDN
let name = {
  firstName: "Vardaan",
  lastName: "Agarwal",
};
let printName = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " lives in " +
      hometown +
      " state: " +
      state
  );
};

let printMyName = printName.bind(name, "Greno");
printMyName("UttarPradesh");

// we need to create a polyfill for the above bind method

// we know that the bind method returns a function which is later invoked to get the required output

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...arg0) {
    obj.apply(args[0], [...params, ...arg0]);
  };
};

let printMyName2 = printName.myBind(name, "Greno");
printMyName2("UttarPradesh");
