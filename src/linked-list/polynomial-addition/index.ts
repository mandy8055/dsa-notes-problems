class PolynomialList {
  public coeff: number;
  public exponent: number;
  public next: PolynomialList | null;

  constructor(coeff: number, exponent: number) {
    this.coeff = coeff;
    this.exponent = exponent;
    this.next = null;
  }
}

function polynomialAddition(
  head1: PolynomialList | null,
  head2: PolynomialList | null,
): PolynomialList | null {
  const dummy = new PolynomialList(0, 0);
  let curr = dummy;
  while (head1 && head2) {
    if (head1.exponent > head2.exponent) {
      curr.next = new PolynomialList(head1.coeff, head1.exponent);
      head1 = head1.next;
    } else if (head1.exponent < head2.exponent) {
      curr.next = new PolynomialList(head2.coeff, head2.exponent);
      head2 = head2.next;
    } else {
      // both heads are equal
      const sumOfCoeff = head1.coeff + head2.coeff;
      // Only add if coeff is not 0
      if (sumOfCoeff !== 0) {
        curr.next = new PolynomialList(sumOfCoeff, head1.exponent);
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    // if curr.next exists move curr to curr.next;
    if (curr.next) curr = curr.next;
  }

  // Attach the remaining portion if left
  curr.next = head1 || head2;
  return dummy.next;
}
