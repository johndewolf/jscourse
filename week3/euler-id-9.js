//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
var answer = 0;
for (var x = 1; x < 1000; x++) {
  for (var y = 1; y < 1000; y++){
    c = Math.pow(x, 2) + Math.pow(y, 2);
    if (x + y + Math.sqrt(c) === 1000) {
      answer = x * y * Math.sqrt(c);
      break;
    }
  }
}
console.log(answer);