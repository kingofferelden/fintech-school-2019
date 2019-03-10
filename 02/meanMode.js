/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  let maxIndex = 0;
  const count = {};

  const total = numbers.reduce((summary, number) => {
    count[number] = (count[number] || 0) + 1;
    const index = count[number];

    maxIndex = index > maxIndex ? index : maxIndex;

    return summary + number;
  }, 0);

  const average = total / numbers.length;
  const modes = [];

  for (const i in count) {
    if (count[i] === maxIndex) {
      modes.push(Number(i));
    }
  }

  return modes.length > 1 ? false : average === modes[0];
}
