function solution(numer1, denom1, numer2, denom2) {

  const numerator = numer1 * denom2 + numer2 * denom1;
  const denominator = denom1 * denom2;


  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
  const divisor = gcd(numerator, denominator);

  return [numerator / divisor, denominator / divisor];
}