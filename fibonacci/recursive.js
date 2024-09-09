/**
 * This function prints the digit at the given position in the fibonacci sequence
 * @argument {number} n: Obtain the desired position in the sequence
 * @returns The digit at the given position
 * */
function fibonacciSequenceOf(n, memo) {
  if (n < 2) return 0;
  if (n === 2) return 1;  
  
  return fibonacciSequenceOf(n - 1) + fibonacciSequenceOf(n - 2);
}

console.log(fibonacciSequenceOf(3));