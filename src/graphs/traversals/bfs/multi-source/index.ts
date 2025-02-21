function multiSourceBFS(
  grid: number[][],
  sources: [number, number][],
): number[][] {
  const m = grid.length,
    n = grid[0].length;
  const dist = Array(m)
    .fill(0)
    .map(() => Array(n).fill(Infinity));
  const queue = new Queue<[number, number, number]>();

  // Add all sources
  for (const [r, c] of sources) {
    dist[r][c] = 0;
    queue.enqueue([r, c, 0]);
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (!queue.isEmpty()) {
    const [r, c, d] = queue.dequeue()!;

    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        dist[nr][nc] === Infinity &&
        grid[nr][nc] !== -1
      ) {
        dist[nr][nc] = d + 1;
        queue.enqueue([nr, nc, d + 1]);
      }
    }
  }

  return dist;
}
