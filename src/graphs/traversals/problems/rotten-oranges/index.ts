function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const q = new Queue<[number, number, number]>(); // i, j, current time
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        q.enqueue([i, j, 0]);
      }
    }
  }

  let elapsed = 0;

  while (!q.isEmpty()) {
    let sz = q.size;
    while (sz--) {
      const [i, j, t] = q.dequeue()!;
      elapsed = Math.max(elapsed, t);
      for (let [r, c] of DIRECTIONS) {
        const nr = i + r;
        const nc = j + c;
        if (nr >= 0 && nc >= 0 && nr < m && nc < n && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          q.enqueue([nr, nc, elapsed + 1]);
        }
      }
    }
  }
  return grid.some((row) => row.includes(1)) ? -1 : elapsed;
}
