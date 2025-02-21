/**
 * Method 1: Using the chromatic number property(by both BFS and DFS)
 * Method 2: Using the odd cycle checking property (by both BFS and DFS)
 */

function isBipartiteDFS(graph: number[][]): boolean {
  const n = graph.length;
  // No need of maintaining visited since colors array will do the trick
  const colors = new Array(n).fill(-1); // -1 unprocessed, 0: red, 1: green

  const dfs = (v: number, c: number): boolean => {
    colors[v] = c;
    for (let nbr of graph[v]) {
      if (colors[nbr] === -1) {
        if (!dfs(nbr, 1 - c)) {
          // 1 - c applying the other color
          return false;
        }
      } else if (colors[nbr] === colors[v]) {
        return false;
      }
    }
    return true;
  };

  // Factoring in the connected components
  for (let i = 0; i < n; i++) {
    if (colors[i] === -1 && !dfs(i, 0)) {
      return false;
    }
  }
  return true;
}

function isBipartiteBFS(graph: number[][]): boolean {
  const n = graph.length;
  // No need of maintaining visited since colors array will do the trick
  const colors = new Array(n).fill(-1);

  const bfs = (v: number, c: number): boolean => {
    const q = new Queue<number>();
    // init
    q.enqueue(v);
    colors[v] = c;
    while (!q.isEmpty()) {
      const vt = q.dequeue()!;
      for (let nbr of graph[vt]) {
        if (colors[nbr] === -1) {
          colors[nbr] = 1 - colors[vt]; // 1 - colors[vt] applying the other color
          q.enqueue(nbr);
        } else if (colors[nbr] === colors[vt]) {
          return false;
        }
      }
    }
    return true;
  };

  // Factoring in the connected components
  for (let i = 0; i < n; i++) {
    if (colors[i] === -1 && !bfs(i, 0)) {
      return false;
    }
  }
  return true;
}
