// Multiplos de 3 fizz, multiplos de 5 buzz, multiplos de 3 y de 5 fizzbuzz

for (let i = 0; i <= 10; i++) {
  let print = "";
  if (i % 3 === 0) print += "fizz";
  if (i % 5 === 0) print += "buzz";
  console.log(print || i);
}
