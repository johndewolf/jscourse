function triangleNumbers(num) {
  var x = 0;
  
  for (var y = 1; y <= num; y++) {
    x += y;
  }
  return x;
}


function numOfDividers(num) {
  var counter = 0;
  for (var y = 1; y < num; y++) {
    if (num % y === 0) {
      counter++;
    }
  }
  return counter;
}


var dividerCounter = 1;
var answer;
for (var x = 1; dividerCounter<400; x++) {
   answer = triangleNumbers(x);
   dividerCounter = numOfDividers(answer);
}
  
console.log(answer);