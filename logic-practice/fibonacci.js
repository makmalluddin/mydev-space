// Fibonacci diawali 0 dan 1, bilangan berikutnya adalah hasil penjumlahan kedua bilangan sebelumnya

let fibonacci = []

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    fibonacci.push(i);
  } else if (i === 1) {
    fibonacci.push(i);
  } else {
    fibonacci.push(fibonacci.at(-2) + fibonacci.at(-1));
  }
};

console.log(fibonacci);
