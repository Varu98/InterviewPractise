// a polyfill is a piece of code (usually Javascript on the web ) used to provide modern functionality on older browsers that do not natively support it.
// - MDN

let name = {
  firstName: "varu",
  lastName: "agarwal",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " , " +
      hometown +
      " in " +
      state +
      " country " +
      country
  );
};

let printMyName = printName.bind(name, "UP");
printMyName("India", "hello");

// we need to create a polyfill for the above bind method

// we know that the bind method returns a function which is later invoked to get the required output
Function.prototype.myBind = function (...args) {
  let func = this;
  let params = args.slice(1);
  return function (...args0) {
    console.log(func);

    func.apply(args[0], [...params, ...args0]);
  };
};

let printMyName2 = printName.myBind(name, "UP");

printMyName2("India", "Hello");
