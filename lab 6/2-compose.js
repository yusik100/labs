
const composeWithErrorHandling = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('All arguments must be functions');
    }
  
    let errorHandler = null; // Зберігає підписника на помилки
  
    const composedFunction = x => {
      try {
        return fns.reduceRight((value, fn) => fn(value), x);
      } catch (error) {
        // Якщо виникає помилка, викликаємо обробник, якщо він є
        if (errorHandler) errorHandler(error);
        return undefined; 
      }
    };
  
    // Метод для підписки на помилки
    composedFunction.on = (event, handler) => {
      if (event === 'error') {
        errorHandler = handler;
      }
    };
  
    return composedFunction;
  };
  
  // Приклад використання:
  
  const inc = x => ++x;
  const twice = x => x * 2;
  const faulty = x => {
    if (x > 5) throw new Error('Value is too large!');
    return x;
  };
  
  const composed = composeWithErrorHandling(twice, faulty, inc);
  
  // Підписуємося на помилки
  composed.on('error', e => {
    console.error('Caught error:', e.message);
  });
  
  // Коректний приклад
  console.log(composed(2)); // Вивід: 6 (inc -> 3, faulty -> 3, twice -> 6)
  
  // Приклад з помилкою
  console.log(composed(6)); // Вивід: undefined, помилка: "Value is too large!"
  