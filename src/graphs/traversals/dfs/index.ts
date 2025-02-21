function dfsOfGraph(adj: number[][]): number[] {
  const len = adj.length;
  const visited = new Array(len).fill(0); // 0 - unvisited
  const res: number[] = [];
  const dfs = (v: number): void => {
    // base case
    if (visited[v] === 1) return;
    visited[v] = 1;
    res.push(v);
    for (let nbr of adj[v]) {
      dfs(nbr);
    }
  };

  dfs(0);
  return res;
}
