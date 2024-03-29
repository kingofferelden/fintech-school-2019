/**
 * Напишите функцию rejectOnTimeout(promise, ms), возвращающую
 * промис, отражающий поведение исходного promise, либо
 * отменяющийся со значением 'timeout_error', если исходный
 * промис не завершился в течение ms миллисекунд.
 *
 * Не использовать Promise.race.
 *
 * @param  {Promise} promise исходный промис
 * @param  {Number}  ms время для timeout в миллисекундах
 * @return {Promise} промис с нужным поведением
 */
export const rejectOnTimeout = (promise, ms) => {
  return new Promise(async(resolve, reject) => {
    promise.then(x => resolve(x), y => reject(y));
    await new Promise(() => setTimeout(() => reject('timeout_error'), ms));
  });
};
