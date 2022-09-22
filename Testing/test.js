function test1() {
  function add(num1, num2) {
    return num1 + num2;
  }

  // testing framework
  const pass = (testname) => {
    console.log(testname, "Yay! your test passed");
  };
  const fail = (testname) => {
    console.error(testname, "Nope! your test failed");
  };

  function test(testName, callback) {
    console.log("testing...", testName);
    const testResult = callback();
    testResult ? pass(testName) : fail(testName);
  }

  // my test
  test("add function testing", () => {
    const a = 22;
    const b = 33;

    return add(a, b) === 56;
  });
}

function test2() {
  // write a function that takes three values . multiply the first two and subract the last one. Then write a test for it.
  function multiply(a, b, c) {
    return a * b - c === 1;
  }
  function multiplyTesting(testname, callback) {
    callback
      ? console.log(testname, "has passed")
      : console.error(testname, "has failed");
  }
  multiplyTesting("multiply Test", multiply(2, 2, 4));
}

function firstJestTest() {
  test("should add two numbers", () => {
    const sum = (a, b) => {
      (a = 22), (b = 33);
      return a + b === 55;
    };
    expect(sum()).toBe(55);
  });
}
// firstJestTest();
