const isOneDirection = (n: number[]): boolean => {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] > n[i + 1]) {
      increasing = false;
    }
    if (n[i] < n[i + 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
};

const isSafe = (n: number[]): boolean => {
  for (let i = 0; i < n.length - 1; i++) {
    const curNum = n[i];
    const nextNum = n[i + 1];
    const distance = Math.abs(curNum - nextNum);

    if (distance < 1 || distance > 3) {
      return false;
    }
  }

  return true;
};

export default function (input: string): number {
  const rows = input.split("\n");
  let safe = 0;

  for (const row of rows) {
    const numbers = row.split(/\s+/).map((x) => Number(x.trim()));

    if (isOneDirection(numbers) && isSafe(numbers)) {
      safe += 1;
    }
  }

  return safe;
}
