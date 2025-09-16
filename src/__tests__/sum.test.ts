import { sum } from '@/sum';

describe('sum 함수 테스트', () => {
  test('두 숫자를 더하면 올바른 결과를 반환한다', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-5, 10)).toBe(5);
    expect(sum(-2, -3)).toBe(-5);
    expect(sum(0, 5)).toBe(5);
    expect(sum(1.5, 2.3)).toBeCloseTo(3.8);
    expect(sum(1000000, 2000000)).toBe(3000000);
    expect(sum(Number.MAX_SAFE_INTEGER, -1)).toBe(Number.MAX_SAFE_INTEGER - 1);
  });
});