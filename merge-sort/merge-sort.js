/**
 * This function uses merge sort algorithm
 * @argument {Array} arr: Getting an unordered of n-digit array
 * @returns The given array as a sorted array
 * */
function sort(arr) {
  let length = arr.length;
  if (length < 2) return;

  let mid = Math.floor(length / 2);
  const left = [];
  const right = [];

  let j = 0;
  for (let i = 0; i < length; i++) {
    if (i < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
      j++;
    }
  }

  sort(left);
  sort(right);
  merge(arr, left, right)
}

function merge(arr, left, right) {
  let leftSize = left.length;
  let rightSize = right.length;

  let i = 0, j = 0, k = 0;
  while (i < leftSize && j < rightSize) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i ++;      
    } else {
      arr[k] = right[j];
      j ++;
    }
    k ++;
  }
  while (i < leftSize) {
    arr[k] = left[i];
    i ++;
    k ++;
  }
  while (j < rightSize) {
    arr[k] = right[j];
    j ++;
    k ++;
  }
}

const arr1 = [12, 6, 7, 3, 10, 1, 2];
const arr2 = [7, 5, 1, 3, 4, 6, 2];
const arr3 = [5, 20, 10, 35, 30, 25, 15];

sort(arr1);
sort(arr2);
sort(arr3);

console.log(arr1); //The result should be [ 1, 2, 3, 6, 7, 10, 12 ]
console.log(arr2); //The result should be [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr3); //The result should be [ 5, 10, 15, 20, 25, 30, 35 ]