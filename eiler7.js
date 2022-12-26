// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.

// Какое число является 10001-м простым числом?


let simpleNumber = 3;

const simpleArray = [2, simpleNumber];

const definesPrimeNumbers = (amount) => {
  let i = 2;
  while(i < amount) {
    simpleNumber += 2;
    if(simpleArray.some((el) => !(simpleNumber % el))) continue;
    simpleArray.push(simpleNumber);
    i += 1;
  };
  return simpleArray[simpleArray.length - 1];
};

// 104743

