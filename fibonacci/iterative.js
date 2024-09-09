/**
 * This function prints out an n-digit array of the fibonacci sequence
 * @argument {number} n: Getting the amount of digits
 * @returns An n-digit array
 * */
function fibonacciSequenceOf(n) {
  const sequence = [0, 1];
  if (n <= 1 || n === undefined) return [0];
  if (n === 2) return sequence;

  for (let i = 2; i < n; i ++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

//console.log(fibonacciSequenceOf(5)); //The result should be: [ 0, 1,  1,  2,  3 ]
//console.log(fibonacciSequenceOf(10)); //The result should be: [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
//console.log(fibonacciSequenceOf(15)); //The result should be: [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ]