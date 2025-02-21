// Overall T.C: O(V + E + V log V)

// Graph building: O(V + E)
// DFS and BFS traversal: O(V + E)
// Sorting components: O(V log V)

// Overall S.C: O(V + E)
// Graph adjacency list: O(V + E)
// Visited array: O(V)
// Result array and recursion stack: O(V)

function connectedcomponents1(v: number, edges: number[][]): number[][] {
  // build graph
  const graph: number[][] = Array.from({ length: v }, () => []);
  for (let [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = new Array(v).fill(0);

  const dfs = (vt: number, arr: number[]): void => {
    // base case
    if (visited[vt] === 1) return;
    visited[vt] = 1;
    arr.push(vt);
    for (let nbr of graph[vt]) {
      if (visited[nbr] === 0) {
        dfs(nbr, arr);
      }
    }
  };

  const ans: number[][] = [];
  for (let i = 0; i < v; i++) {
    const arr: number[] = [];
    if (visited[i] === 0) dfs(i, arr);
    if (arr.length > 0) {
      // no need to sort. It is only in this problem that this is required. We can have multiple traversal results
      arr.sort((a, b) => a - b);
      ans.push(arr);
    }
  }
  return ans;
}

function connectedcomponents2(v: number, edges: number[][]): number[][] {
  // build graph
  const graph: number[][] = Array.from({ length: v }, () => []);
  for (let [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = new Array(v).fill(0);

  const bfs = (i: number, arr: number[]): void => {
    const q = new Queue<number>();
    q.enqueue(i);
    visited[i] = 1;
    arr.push(i);
    while (!q.isEmpty()) {
      const vt = q.dequeue()!;
      for (let nbr of graph[vt]) {
        if (visited[nbr] === 0) {
          visited[nbr] = 1;
          arr.push(nbr);
          q.enqueue(nbr);
        }
      }
    }
  };

  const ans: number[][] = [];
  for (let i = 0; i < v; i++) {
    const arr: number[] = [];
    if (visited[i] === 0) bfs(i, arr);
    if (arr.length > 0) {
      // no need to sort. It is only in this problem that this is required. We can have multiple traversal results
      arr.sort((a, b) => a - b);
      ans.push(arr);
    }
  }
  return ans;
}
