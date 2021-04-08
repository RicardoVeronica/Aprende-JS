const fibonacci_cache = {};

const fibonacci = (n) => {
  if (n in fibonacci_cache) return fibonacci_cache.n;
  if (n === 1) value = 1;
  if (n === 2) value = 1;
  if (n > 2) value = fibonacci(n - 1) + fibonacci(n - 2);
  fibonacci_cache.n = value;
  return value;
};

for (let n = 1; n < 35 + 1; n++) console.log(`${n}: ${fibonacci(n)}`);
