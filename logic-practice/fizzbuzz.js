// Cetak fizz pada kelipatan 3, buzz pada kelipatan 5, dan fizzbuzz pada kelipatan 15

let fizzbuzz = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 15 !== 0) {
    fizzbuzz.push('fizz')
  } else if (i % 5 === 0 && i % 15 !== 0) {
    fizzbuzz.push('buzz')
  } else if (i % 15 === 0) {
    fizzbuzz.push('fizzbuzz')
  } else {
    fizzbuzz.push(i)
  }
};

console.log(fizzbuzz);
