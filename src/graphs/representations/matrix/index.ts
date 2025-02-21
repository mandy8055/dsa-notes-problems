// One point to see. If the graph is undirected, the matrix is symmetric on its diagonals
function matrixRepresentation(input: number[][]): void {
  const n = input.length;
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let [u, v] of input) {
    // adjust based on 0 based indexing(if required)
    u -= 1;
    v -= 1;
    // If graph is undirected edge b/w u -> v and v -> u. If directed only matrix[u][v] is marked as 1.
    matrix[u][v] = 1;
    matrix[v][u] = 1;
  }

  console.log(matrix.map((row) => row.join(' ')).join('\n'));
}
