const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];
const primeNumbers = (num) => {
    if(num  < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;

};
const arrPrime = numbers.filter(primeNumbers);
const maxPrime = math.max(arrPrime);
const minPrime = math.min(arrPrime);
const sumPrime = arrPrime.reduce((sum, num) => sum + num, 0);

console.log("Prime Numbers:" , arrPrime);
console.log("Maximum Prime:", maxPrime);
console.log("Minimum Prime:", minPrime);
console.log("Sum Of Prime:" , sumPrime);