# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.
# Used ruby, need to optimize prime function in JS
def checkPrime(num)
  prime = true
  x = 2
  squareroot = Math.sqrt(num)
  while (x <= squareroot)
    if num % x == 0
      prime = false
      break
    end
    x += 1
  end

  prime
end


total = 0
count = 2
while (count < 2000000)
  if checkPrime(count)
    total += count
  end

  count += 1
end
puts total