function isCycleDFS(adj: number[][]): boolean {
  const n = adj.length;
  const visited = new Array(n).fill(0);
  const dfs = (v: number, par: number): boolean => {
    visited[v] = 1;
    for (let nbr of adj[v]) {
      if (visited[nbr] === 0) {
        if (dfs(nbr, v)) return true;
      } else if (par !== nbr) {
        return true;
      }
    }
    return false;
  };

  // for factoring in the connected component
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0 && dfs(i, -1)) {
      return true;
    }
  }

  return false;
}

function isCycleBFS(adj: number[][]): boolean {
  const n = adj.length;
  const visited = new Array(n).fill(0);

  const bfs = (v: number): boolean => {
    const q = new Queue<[number, number]>();
    q.enqueue([v, -1]);
    visited[v] = 1;
    while (!q.isEmpty()) {
      const [vt, p] = q.dequeue()!;
      for (let nbr of adj[vt]) {
        if (visited[nbr] === 0) {
          visited[nbr] = 1;
          q.enqueue([nbr, vt]);
        } else if (nbr !== p) {
          return true;
        }
      }
    }
    return false;
  };

  // for factoring in the connected component
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0 && bfs(i)) {
      return true;
    }
  }

  return false;
}
