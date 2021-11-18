let button = document.querySelector("#submitButton");

// A number is interesting if it is has atleast 2 of the following:
// prime,
// ends in 1 or 5,
// sum of digits is a multiple of 10,
// all digits are multiples of 3 or 5
const isPrimeCheck = (n) => {
  let max = Math.sqrt(n);
  if(n <= 10) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  } else {
  for (let i = 2; i < max; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
};


const sumTenFunc = (n) => {
  let sum = 0;

  while(n > 0) {
    const r = n % 10;
    n = (n - r) - 10;

    sum += r;
  }

  return !(sum % 10);
};

const isMultipleOf5Or3 = (n) => {

  for (let i = 0; i < n; ++i) {
    if (n % 3 === 0 || n % 5 === 0) {
      return true;
    } 
  }

  return false;
};

const endsInOneOrFiveFunc = (n) => {
  if (n % 10 === 1 || n % 10 === 5) {
    return true;
  }
  return false;
};

function isInteresting(n) {
  let sumTen = sumTenFunc(n);
  let endsInOneOrFive = endsInOneOrFiveFunc(n);
  let multiplesFiveOrThree = isMultipleOf5Or3(n);
  let isPrime = isPrimeCheck(n);
  let count = 0;
 
  if (isPrime) count += 1;
  if (sumTen) count += 1;
  if (endsInOneOrFive) count += 1;
  if (multiplesFiveOrThree) count += 1;

  console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
  console.log("COUNT: ", count);

  if (count >= 2) {
    return n + " is interesting";
  } else if (2 > count > 0) {
    return n + " is okay";
  } else {
    return n + " is booooooring";
  }
};

button.addEventListener("click", () => {
  let input = document.querySelector("#numberInput");
  let value = parseInt(input.value);
  isInteresting();
  let interesting = isInteresting(value);

  let output = document.querySelector("#output");
  output.innerText = interesting;
});


document.querySelector("#primeButton").addEventListener("click", () => {


  let input = document.querySelector("#primeInput");
  let n = parseInt(input.value);
  isPrimeCheck(n);
  
  const output = document.querySelector("#primeOutput");
  if (isPrimeCheck(n)) {
    output.innerHTML = n + " is prime!";
  } else {
    output.innerHTML = n + " is not prime!";
  }
});
