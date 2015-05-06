//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

sumOfSquares = function(num) {
  var sum = 0;
  for (x = 0; x < num; x++) {
    sum += Math.pow(num - x, 2);
  }
  return sum;
};

squareOfSums = function(num) {
  var sum = 0;
  for (x = 0; x < num; x++) {
    sum += num-x;
  }
  return Math.pow(sum, 2);
};

console.log(squareOfSums(100) - sumOfSquares(100));