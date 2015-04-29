var range = function(start, end) {
  var numbers = [];
  for (var x = start; x <= end; x++) {
    numbers.push(x);
  }
  return numbers;
};

var sum = function(numArray) {
  var total = 0;
  for (var x = 0; x < numArray.length; x++) {
    total += numArray[x];
  }
  return total;
};

console.log(sum(range(1, 10)));

//reverse array
var reverseArray = function(array) {
  var newArray = [];

  for (var x = 0; x <= array.length + 1; x++) {
    newArray[x] = array.pop();
  }
  return newArray;
};

console.log(reverseArray(["A", "B", "C"]));
