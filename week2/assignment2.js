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

var findPalindromes = function(max, min) {
  var palindromes = [];
  for (var x = max; x > min; x--) {
    if (checkPalindrome(x) === true) {
      palindromes.push(x);
    }
  }
  return palindromes;
};

var findProducts = function(num, highestNum){
  var highestNum = 999;
  
  while (num % highestNum > 0) {
    highestNum--;
  }
  
  num2 = num / highestNum;
  return [highestNum, num2];
};


var allPossib = findPalindromes(998001, 10000);
var threeDigits = [];

for (var x = 0; x < allPossib.length - 1; x++) {
  var y = findProducts(allPossib[x], 999);
  if (y[0].toString().length === 3 && y[1].toString().length === 3) {
    threeDigits.push(y);
  }
}

console.log(threeDigits[0][0] * threeDigits[0][1]);