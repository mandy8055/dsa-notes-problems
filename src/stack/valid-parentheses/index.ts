function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let el of s) {
    if (el === '{' || el === '(' || el === '[') {
      stack.push(el);
    } else if (
      (el === '}' && stack[stack.length - 1] !== '{') ||
      (el === ')' && stack[stack.length - 1] !== '(') ||
      (el === ']' && stack[stack.length - 1] !== '[')
    ) {
      return false;
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}
