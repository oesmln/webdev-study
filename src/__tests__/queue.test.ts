import { Queue } from '@/queue';

describe('스택과 큐 테스트', () => {

  test('스택 top을 하면 가장 늦게 push한 값을 반환한다.', () => {
    const stack = new Queue<string>();
    stack.push('바나나');
    stack.push('사과');
    stack.push('포도');
    expect(stack.top()).toBe('포도');
  });

  
  test('스택이 비어있으면 true를 반환한다.', () => {
    const stack = new Queue<number>();
    expect(stack.isEmpty()).toBe(true);
  });

  test('스택이 비어있지 않으면 false를 반환한다.', () => {
    const stack = new Queue<number>();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  
  test('현재 스택의 사이즈를 반환한다.', () => {
    const stack = new Queue<number>();
    expect(stack.size).toBe(0);
    stack.push(1);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });

    test('스택 사이즈 수정 시 에러를 발생시킨다.', () => {
    const stack = new Queue<number>();
    expect(() => {
      stack.size = 10;
    }).toThrow();
  });

  test('스택 3가지 숫자를 push 후 pop을 하면 올바른 순서로 반환한다.', () => {
    const stack = new Queue<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  test('큐 3가지 숫자를 enqueue 후 dequeue를 하면 올바른 순서로 반환한다.', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  test('큐 front를 하면 가장 먼저 enqueue한 값을 반환한다.', () => {
    const queue = new Queue<string>();
    queue.enqueue('바나나');
    queue.enqueue('사과');
    queue.enqueue('포도');
    expect(queue.front()).toBe('바나나');
  });

  test('큐가 비어있으면 true를 반환한다.', () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
  });

  test('큐가 비어있지 않으면 false를 반환한다.', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('현재 큐의 사이즈를 반환한다.', () => {
    const queue = new Queue<number>();
    expect(queue.size).toBe(0);
    queue.enqueue(1);
    expect(queue.size).toBe(1);
  });

  test('큐 사이즈 수정 시 에러를 발생시킨다.', () => {
    const queue = new Queue<number>();
    expect(() => {
      queue.size = 10;
    }).toThrow();
  });
});