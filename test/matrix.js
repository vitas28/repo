console.log("=======================");

const printSpiral = (matrix) => {
  if (matrix.length === 0) return;

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let result = "";

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result += matrix[startRow][col] + " ";
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      result += matrix[row][endCol] + " ";
    }
    endCol--;

    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result += matrix[endRow][col] + " ";
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result += matrix[row][startCol] + " ";
      }
      startCol++;
    }
  }

  console.log(result.trim());
};

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix5x5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

printSpiral(matrix3x3);
printSpiral(matrix5x5);
