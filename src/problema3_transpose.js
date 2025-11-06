// Transpuesta funcional sin map de columnas
const firstCol = matrix => matrix.map(row => row[0]);
const dropFirstCol = matrix => matrix.map(row => row.slice(1));

const transpose = matrix =>
  matrix[0].length === 0 ? [] : [ firstCol(matrix), ...transpose(dropFirstCol(matrix)) ];

// DEMO
const X = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(transpose(X));
