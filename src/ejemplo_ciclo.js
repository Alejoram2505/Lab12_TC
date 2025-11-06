let contador = 0;
for (let i = 1; i <= 1000000; i++) {
  if (i % 2 === 0) contador++;
}

console.log("Cantidad de números pares:", contador);
