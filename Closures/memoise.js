// first we will implement the fibonacci series.
// this computation is known to take time hence it will prove useful in what we are trying to implement.

// After adding the fibonacci function we will be creating a memoise function that will relatively improve the computation results.

function fibonacciNumber(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}

function timeTaken(fn) {
  console.time();
  fn();
  console.timeEnd();
}

timeTaken(() => fibonacciNumber(38));

function memoise(fn) {
  const cache = new Map();

  cache.set(fn);
  console.log(cache);
  // if(cache.has())

  if (cache.has(fn)) {
    return cache.get(fn);
  }

  return (num) => {

  }
}
// const fibM =
