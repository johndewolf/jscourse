
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

var checkPrime = function(num) {
  var prime = true;

  for (var x = 2; x < num; x++) {
    if (num % x === 0 && x != num) {
    	prime = false;
      break;
    }
  }
  return prime;
};

var primes = [];

for (var x = 2; primes.length < 10001; x++) {
   if (checkPrime(x) === true) {
     primes.push(x);
   }
}

console.log(primes.pop());
