function generateMatrix(n: number): number[][] {
  // Create a nxn matrix
  // Take a counter variable for keeping track of numbers
  // Fill the matrix spirally.
  // looping condition counter < n*n
  const matrix: number[][] = Array.from({ length: n }, () => new Array(n));
  let counter = 1;
  const total = n * n;
  let minR = 0,
    maxR = n - 1;
  let minC = 0,
    maxC = n - 1;
  while (counter <= total) {
    for (let i = minC; i <= maxC && counter <= total; i++) {
      matrix[minR][i] = counter++;
    }
    minR++;
    for (let i = minR; i <= maxR && counter <= total; i++) {
      matrix[i][maxC] = counter++;
    }
    maxC--;
    for (let i = maxC; i >= minC && counter <= total; i--) {
      matrix[maxR][i] = counter++;
    }
    maxR--;
    for (let i = maxR; i >= minR && counter <= total; i--) {
      matrix[i][minC] = counter++;
    }
    minC++;
  }

  return matrix;
}
