// Bilangan prima adalah bilangan yang hanya habis dibagi 1 dan bilangan itu sendiri 
let prima = []

for (let i = 2; i <= 100; i++) {
  let isPrima = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrima = false;
      break;
    }
  }

  if (isPrima) {
    prima.push(i);
  };
};

console.log(prima);
