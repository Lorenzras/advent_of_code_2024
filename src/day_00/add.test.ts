import { add } from '.';

describe('testing add file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
  test('"1,2,3" should result in 6 ', () => {
    expect(add('1,2,3')).toBe(6);
  });
  test('negative number should throw error', () => {
    expect(() => add('1,-2,3')).toThrowErrorMatchingSnapshot();
  });
});