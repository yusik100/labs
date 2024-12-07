
const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('All arguments must be functions');
    }

    return x => fns.reduce((value, fn) => fn(value), x);
  };

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

try {
  // Коректні приклади
  const f = pipe(inc, twice, cube);
  const x = f(5); 
  console.log(x); // 1728

  const n = pipe(inc, inc);
  const y = n(7); 
  console.log(y); // 9

  // Приклад з помилкою
  const fError = pipe(inc, 7, cube); // Помилка: All arguments must be functions
} catch (error) {
  console.error(error.message);
}