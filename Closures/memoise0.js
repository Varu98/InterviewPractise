// create a memoise function that takes in a reducer function and implements a cache storage for the repeating result.

const add = (...args) => {
  let sum = 0;
  args.map((element) => (sum += element));
  return () => sum;
};

const timeTakenToRun = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

const memoise = (fn) => {
  // here we use Map constructor as it is more robust in storing different types of values as compared to an object.
  // It also comes packed with getter and setter methods that we can use to store keys.
  const cache = new Map();

  return (...args) => {
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);

    cache.set(key, fn(...args));

    return cache.get(key);
  };
  // converting the args array into strings to reduce chances of error while setting the key.
};

const addM = memoise(add);
timeTakenToRun(addM(78, 55, 2, 2, 1, 5, 56566, 5, 4, 78994555974571266));
timeTakenToRun(addM(78, 55, 2, 2, 1, 5, 56566, 5, 4, 78994555974571266));
timeTakenToRun(addM(78, 55, 2, 2, 1, 5, 56566, 5, 4, 78994555974571266));
timeTakenToRun(addM(78, 55, 2, 2, 1, 5, 56566, 5, 4, 78994555974571266));
timeTakenToRun(addM(78, 55, 2, 2, 1, 5, 56566, 5, 4, 78994555974571266));
