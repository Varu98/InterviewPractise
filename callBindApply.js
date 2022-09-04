let user = {
  firstName: "Vardaan",
  lastName: "Agarwal",
};
function printFullName(hometown, word) {
  console.log(
    this.firstName + " " + this.lastName + ", " + hometown + ", " + word
  );
}

let user1 = {
  firstName: "Billi",
  lastName: "Agarwal",
};

// function borrowing
printFullName.call(user, "Greno", "Hello");

// in apply method we pass the arguments in an array list
printFullName.apply(user1, ["greno", "hello"]);

// Bind method
// Bind method creates a copy of the method and returns a function while at the same time Binding the new function with the previous one along with the first argument as an object and the rest being the arguments
// note- Bind method returns a function without invoking it

let printMyName = printFullName.bind(user1, "Greno", "Hello");
console.log(printMyName);
printMyName();
