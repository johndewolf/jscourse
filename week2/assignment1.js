var evenlyDivisible = function(num, max) {
  var counter = 0;
  for (var x=1; x <= max; x++) {
    if (num % x > 0) {
    counter += 1;
    break;
    }
  }
  if (counter > 0) {
    return false;
  } else {
    return true;
  }
};

numTracker = 40;
while (evenlyDivisible(numTracker, 20) === false) {
  numTracker += 1;
}


console.log(numTracker);