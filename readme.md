
# Number System Project

This repository contains JavaScript programs to perform operations on arrays of numbers. The tasks include separating even and odd numbers, identifying prime numbers, and performing additional calculations on prime numbers.

# Features

1. *Even and Odd Number Detection*:
   - Separates even and odd numbers from a given array.
   - Displays the results in the console.

2. *Prime Number Identification*:
   - Identifies all prime numbers in a given array.
   - Performs calculations such as finding the maximum, minimum, and the sum of the prime numbers.

---

# Files in the Repository

#1. index.js
This file contains the code to separate even and odd numbers from an array.

*Code*:
javascript:
const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

#2. app.js
This file contains the code to identify prime numbers and perform additional calculations.
const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];

// Function to check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Find prime numbers
const primeArray = numbers.filter(isPrime);
const maxPrime = Math.max(...primeArray);
const minPrime = Math.min(...primeArray);
const sumPrime = primeArray.reduce((sum, num) => sum + num, 0);

console.log("Prime Numbers:", primeArray);
console.log("Maximum Prime:", maxPrime);
console.log("Minimum Prime:", minPrime);
console.log("Sum of Primes:", sumPrime);
