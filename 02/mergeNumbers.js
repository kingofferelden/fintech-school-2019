/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  const symbolList = Array.from(number.toString());
  const arrSum = symbolList.reduce((total, num) => Number(total) + Number(num), 0);

  return arrSum.toString().length > 1 ? mergeNumbers(arrSum) : arrSum;
}
