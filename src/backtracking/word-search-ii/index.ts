class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;
  word: string | null;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.word = null;
  }
}

class Trie {
  private root: TrieNode;

  get rootNode() {
    return this.root;
  }

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
    node.word = word;
  }
}

// T.C: O(M*N*4^L), 4 set of directions, M = #f rows, N = #f columns, L = length of longest word
function findWords(board: string[][], words: string[]): string[] {
  const m = board.length;
  const n = board[0].length;
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  const res = new Set<string>();
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const solve = (r: number, c: number, node: TrieNode): void => {
    // base case
    if (
      r < 0 ||
      c < 0 ||
      r >= m ||
      c >= n ||
      board[r][c] === '$' ||
      !node.children[board[r][c]]
    )
      return;

    const temp = board[r][c];
    node = node.children[temp];
    node.isEndOfWord && node.word && res.add(node.word);
    board[r][c] = '$';
    for (let [ro, co] of DIRECTIONS) {
      const newR = r + ro;
      const newC = c + co;
      solve(newR, newC, node);
    }
    board[r][c] = temp;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      solve(i, j, trie.rootNode);
    }
  }
  return Array.from(res);
}
