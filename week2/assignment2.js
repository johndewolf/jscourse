//Find the largest palindrome made from the product of two 3-digit numbers.

var checkPalindrome = function(num) {
  var numString = num.toString();
  var endIndex = numString.length - 1;
  var counter = 0;
  for (var x = 0; x < numString.length; x++) {
    if (numString[x] != numString[endIndex]) {
      counter++;
      break;
    }
    else {
      endIndex--;
    }
  }
  if (counter > 0) {
    return false;
  }
  else {
    return true;
  }
};
var highestNum = 0;
for (var x = 100; x < 1000; x++) {
  for var(y = 100; y < 1000; y++) {
    product = x * x;
    if (checkPalindrome(product) === true) {
      highestNum = product;
    }
  }
}

console.log(product);