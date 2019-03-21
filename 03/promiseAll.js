/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => {
  return new Promise((resolve, reject) => {
    const result = {};

    promises.forEach((promise, index) => {
      promise.then(x => {
        result[index] = x;
        if (Object.keys(result).length === promises.length) {
          resolve(Object.values(result));
        }
      })
        .catch(err => reject(err));
    });
  });
};
