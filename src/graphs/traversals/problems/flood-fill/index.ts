function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const oldColor = image[sr][sc];
  const m = image.length;
  const n = image[0].length;

  // If the starting pixel already has the new color, no need to process
  if (oldColor === color) {
    return image;
  }

  const dfs = (i: number, j: number): void => {
    // base case
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== oldColor) {
      return;
    }
    image[i][j] = color;
    // main case
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  // Start
  dfs(sr, sc);

  return image;
}
