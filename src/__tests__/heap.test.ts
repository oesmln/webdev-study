import { Heap } from '../heap';

describe('힙 테스트', () => {
  test('비어있는 힙에서 isEmpty메서드 호출시 true를 반환한다.', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    expect(minHeap.isEmpty()).toBe(true);
    expect(minHeap.size()).toBe(0);
    expect(maxHeap.isEmpty()).toBe(true);
    expect(maxHeap.size()).toBe(0);
  });

  test('최소 힙에서 push 후 peek 메서드 호출시 가장 작은 값을 반환한다.', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    minHeap.push(2);
    minHeap.push(1);
    minHeap.push(3);
    expect(minHeap.peek()).toBe(1);
  });

  test('최소 힙에서 push 후 pop 메서드 호출시 올바른 결과를 반환한다.', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    minHeap.push(1);
    minHeap.push(2);
    minHeap.push(3);
    expect(minHeap.pop()).toBe(1);
    expect(minHeap.size()).toBe(2);
    expect(minHeap.isEmpty()).toBe(false);
  });

  test('최대 힙에서 push 후 peek 메서드 호출시 가장 큰 값을 반환한다.', () => {
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    maxHeap.push(1010);
    maxHeap.push(2);
    maxHeap.push(35);
    maxHeap.push(57);
    expect(maxHeap.peek()).toBe(1010);
  });

  test('최대 힙에서 push 후 pop 메서드 호출시 올바른 결과를 반환한다.', () => {
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    maxHeap.push(1010);
    maxHeap.push(2);
    maxHeap.push(35);
    maxHeap.push(57);
    expect(maxHeap.pop()).toBe(1010);
    expect(maxHeap.size()).toBe(3);
    expect(maxHeap.isEmpty()).toBe(false);
  });

  test('최대 힙은 pop() 시 내림차순, 최소 힙은 오름차순으로 정렬된 결과를 반환한다', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    const array = [31, 10, 2, 9, 15, 28, 18, 20];
    array.forEach(num => {
      minHeap.push(num);
      maxHeap.push(num);
    });
    const minHeapArray = new Array<number>();
    const maxHeapArray = new Array<number>();
    while (minHeap.size() > 0) {
      minHeapArray.push(minHeap.pop());
    }
    while (maxHeap.size() > 0) {
      maxHeapArray.push(maxHeap.pop());
    }
    expect(minHeapArray).toEqual([2, 9, 10, 15, 18, 20, 28, 31]);
    expect(maxHeapArray).toEqual([31, 28, 20, 18, 15, 10, 9, 2]);
  });

  test('비어있는 힙에서 pop 메서드 호출시 오류를 반환한다.', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    expect(() => minHeap.pop()).toThrow();
    expect(() => maxHeap.pop()).toThrow();
  });

  test('비어있는 힙에서 peek 메서드 호출시 오류를 반환한다.', () => {
    const minHeap = new Heap<number>((a: number, b: number) => a - b);
    const maxHeap = new Heap<number>((a: number, b: number) => b - a);
    expect(() => minHeap.peek()).toThrow();
    expect(() => maxHeap.peek()).toThrow();
  });
});