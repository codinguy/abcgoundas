export function parsePositiveInteger(value) {
  const number = Number(value);

  if (!Number.isFinite(number) || !Number.isInteger(number) || number <= 1) {
    return null;
  }

  return number;
}

export function greatestCommonDivisor(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return Math.abs(a);
}

export function leastCommonMultiple(a, b) {
  return Math.abs(a * b) / greatestCommonDivisor(a, b);
}

export function calculateLcmResult(valueA, valueB) {
  if (!valueA || !valueB) {
    return "Please enter 2 numbers.";
  }

  const firstNumber = parsePositiveInteger(valueA);
  const secondNumber = parsePositiveInteger(valueB);

  if (firstNumber === null || secondNumber === null) {
    return "Please enter whole numbers greater than 1.";
  }

  return leastCommonMultiple(firstNumber, secondNumber);
}
