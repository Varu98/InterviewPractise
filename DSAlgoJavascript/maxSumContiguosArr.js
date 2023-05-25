let arr = [1, 2, -10, 3, 4, -10, 8, 9, 10];
// it is basically the highest sum of the sub array.
let maxSum = 0;
let currentSum = 0;

// kadane's algorithm
const useKadanesAlgo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], arr[i] + currentSum);

    maxSum = Math.max(currentSum, maxSum);
  }
  console.log(maxSum);
};
useKadanesAlgo(arr);

// TODO

// brute force approach

const useBruteForce = (arr) => {};
