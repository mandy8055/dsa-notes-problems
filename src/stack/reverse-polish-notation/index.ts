function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const isOperator = (token: string) => ['+', '-', '*', '/'].includes(token);

  const evaluate = (f: number, s: number, sym: string): number => {
    switch (sym) {
      case '+':
        return f + s;
      case '-':
        return f - s;
      case '*':
        return f * s;
      case '/':
        return Math.trunc(f / s);
      default:
        return 0; // invalid case(unreachable)
    }
  };
  for (let token of tokens) {
    if (isOperator(token)) {
      const s = stack.pop()!;
      const f = stack.pop()!;
      stack.push(evaluate(f, s, token));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop()!;
}
