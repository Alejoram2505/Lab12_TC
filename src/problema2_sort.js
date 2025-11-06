// Ordenamiento funcional
const minBy = (key, [x, ...xs]) =>
  xs.length === 0 ? x : (x[key] <= minBy(key, xs)[key] ? x : minBy(key, xs));

const removeOnce = (elmin, [x, ...xs]) =>
  x === elmin ? xs : [x, ...removeOnce(elmin, xs)];

const sortByKey = (arr, key) => {
  if (arr.length === 0) return [];
  const m = minBy(key, arr);
  return [m, ...sortByKey(removeOnce(m, arr), key)];
};

// DEMO
const data = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' }
];

console.log(sortByKey(data, 'model'));
