function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const res: number[] = new Array(total);
  let minR = 0,
    maxR = m - 1;
  let minC = 0,
    maxC = n - 1;
  let counter = 0;
  while (counter < total) {
    for (let i = minC; i <= maxC && counter < total; i++) {
      res[counter++] = matrix[minR][i];
    }
    minR++;
    for (let i = minR; i <= maxR && counter < total; i++) {
      res[counter++] = matrix[i][maxC];
    }
    maxC--;
    for (let i = maxC; i >= minC && counter < total; i--) {
      res[counter++] = matrix[maxR][i];
    }
    maxR--;
    for (let i = maxR; i >= minR && counter < total; i--) {
      res[counter++] = matrix[i][minC];
    }
    minC++;
  }

  return res;
}
