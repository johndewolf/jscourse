
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

var checkPrime = function(num) {
  var nonPrimesCounter = 0;
  
  if (num <= 3 && num >= 0) {
    return true;
  }
  for (var x = 2; x < num - 1; x++) {
    if (num % x === 0) {
      nonPrimesCounter++;
      break;
    }
  }
  
  if (nonPrimesCounter > 0) {
    return false;
  }
  else {
    return true;
  }
};

var primes = [];

for (var x = 2; primes.length < 10001; x++) {
   if (checkPrime(x) === true) {
     primes.push(x);
   }
}

console.log(primes.pop());
