
const suma = arr =>
  arr.length === 0 ? 0 : arr[0] + suma(arr.slice(1));

const numeros = [2, 4, 6, 8];
console.log("Lista:", numeros);
console.log("Suma total (recursiva):", suma(numeros));
