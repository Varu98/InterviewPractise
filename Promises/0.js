const wait = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });

wait(2000).then(() => console.log("After 2 seconds"));

const promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then((x) => console.log(x))
  .then((x) => console.log(x))
  .then((x) => console.log(x));

const p = Promise.resolve(10);

p.then((x) => console.log(x));
p.then((x) => console.log(x));
p.then((x) => console.log(x));
