import { simpleSort } from '@/sort';
import '@jest/globals';

describe('숫자 정렬 함수', () => {
    test('기본적인 정렬 동작', () => {
        expect(simpleSort([3, 1, 2])).toEqual([1, 2, 3]);
        expect(simpleSort([10, -5, 0, 2])).toEqual([-5, 0, 2, 10]);
        expect(simpleSort([1])).toEqual([1]);
        expect(simpleSort([])).toEqual([]);
        expect(simpleSort([0, -1, 1, -2, 2])).toEqual([-2, -1, 0, 1, 2]);
        expect(simpleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(simpleSort([2, 3, 2, 1, 1])).toEqual([1, 1, 2, 2, 3]);
    });
});

describe('숫자 내림차순 정렬 함수', () => {
    test('기본적인 정렬 동작', () => {
        expect(simpleSort([3, 1, 2], 'desc')).toEqual([3, 2, 1]);
        expect(simpleSort([10, -5, 0, 2], 'desc')).toEqual([10, 2, 0, -5]);
        expect(simpleSort([1], 'desc')).toEqual([1]);
        expect(simpleSort([], 'desc')).toEqual([]);
        expect(simpleSort([0, -1, 1, -2, 2], 'desc')).toEqual([2, 1, 0, -1, -2]);
        expect(simpleSort([5, 4, 3, 2, 1], 'desc')).toEqual([5, 4, 3, 2, 1]);
        expect(simpleSort([3, 2, 2, 1, 1], 'desc')).toEqual([3, 2, 2, 1, 1]);
    });
});