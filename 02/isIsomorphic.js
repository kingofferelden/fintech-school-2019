/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function isIsomorphic(left, right) {
  return helpMap(left, right) && helpMap(right, left);
}

function helpMap(left, right) {
  const leftMap = new Map();

  for (let i = 0; i < left.length; i++) {
    const leftChar = left.charAt(i);
    const rightChar = right.charAt(i);

    if (!leftMap.has(leftChar)) {
      leftMap.set(leftChar, rightChar);
    } else if (leftMap.get(leftChar) !== rightChar) {
      return false;
    }
  }
  return true;
}
