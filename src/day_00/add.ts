export function add(numbers: string): number {
  const integers = numbers.split(",").map((x) => parseInt(x));
  const negatives = integers.filter((x) => x < 0);

  if (negatives.length > 0)
    throw new RangeError("Negatives are not allowed: " + negatives.join(", "));

  return integers.filter((x) => x <= 1000).reduce((a, b) => a + b, 0);
}
