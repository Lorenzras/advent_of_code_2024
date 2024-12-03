import f from './index';

describe('testing add file', () => {
  test('should return 11 according to sample in the problem', () => {
    const input = [
      "3 4",
      "4 3",
      "2 5",
      "1 3",
      "3 9",
      "3 3"
    ].join('\n');

    expect(f(input)).toBe(11);
  });

});