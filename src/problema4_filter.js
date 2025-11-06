// Eliminación funcional sin usar .filter()
const removeAll = (lista, eliminar) => {
  if (lista.length === 0) return [];
  const [x, ...xs] = lista;
  const resto = removeAll(xs, eliminar);
  return eliminar.includes(x) ? resto : [x, ...resto];
};

// DEMO
const lista = ['rojo','verde','azul','amarillo','gris','blanco','negro'];
const borrar = ['amarillo','cafe','blanco'];

console.log(removeAll(lista, borrar));
