import { LinkedList } from '../linkedList';

describe('양방향 연결리스트 테스트', () => {
    test('3개의 요소 append 후 전체 순회 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.printList()).toEqual([1, 2, 3]);
    });

    test('빈 연결리스트 순회 테스트', () => {
        const linkedList = new LinkedList<number>();
        expect(linkedList.printList()).toEqual([]);
    });

    test('문자열, 숫자 연결리스트 테스트', () => {
        const linkedList = new LinkedList<number | string>();
        linkedList.append(1);
        linkedList.append('two');
        linkedList.append(3);
        expect(linkedList.printList()).toEqual([1, 'two', 3]);
    });

    test('중간 노드 삭제 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.delete(2);
        expect(linkedList.size()).toBe(2);
        expect(linkedList.printList()).toEqual([1, 3]);
    });

    test('존재하지 않는 노드 삭제 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.delete(4);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.printList()).toEqual([1, 2, 3]);
    });

    test('빈 링크드리스트에서 노드 삭제 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.delete(1);
        expect(linkedList.size()).toBe(0);
        expect(linkedList.printList()).toEqual([]);
    });

    test('노드 검색 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.search(2)).toBe(2);
        expect(linkedList.search(4)).toBeNull();
    });

    test('역방향 순회 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.printListReverse()).toEqual([3, 2, 1]);
    });

    test('빈 리스트 역방향 순회 테스트', () => {
        const linkedList = new LinkedList<number>();
        expect(linkedList.printListReverse()).toEqual([]);
    });

    test('첫 번째와 마지막 요소 접근 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.getFirst()).toBe(1);
        expect(linkedList.getLast()).toBe(3);
    });

    test('빈 리스트에서 첫 번째와 마지막 요소 접근 테스트', () => {
        const linkedList = new LinkedList<number>();
        expect(linkedList.getFirst()).toBeNull();
        expect(linkedList.getLast()).toBeNull();
    });

    test('단일 요소 리스트에서 첫 번째와 마지막 요소 접근 테스트', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(42);
        expect(linkedList.getFirst()).toBe(42);
        expect(linkedList.getLast()).toBe(42);
        expect(linkedList.printListReverse()).toEqual([42]);
    });

    test('양방향 포인터 연결 테스트 - 삭제 후 역방향 순회', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        linkedList.delete(3);
        expect(linkedList.printList()).toEqual([1, 2, 4, 5]);
        expect(linkedList.printListReverse()).toEqual([5, 4, 2, 1]);

        linkedList.delete(1);
        expect(linkedList.printList()).toEqual([2, 4, 5]);
        expect(linkedList.printListReverse()).toEqual([5, 4, 2]);

        linkedList.delete(5);
        expect(linkedList.printList()).toEqual([2, 4]);
        expect(linkedList.printListReverse()).toEqual([4, 2]);
    });

    test('tail 포인터 동작 테스트', () => {
        const linkedList = new LinkedList<string>();
        linkedList.append('first');
        expect(linkedList.getLast()).toBe('first');

        linkedList.append('second');
        expect(linkedList.getLast()).toBe('second');

        linkedList.append('third');
        expect(linkedList.getLast()).toBe('third');

        linkedList.delete('third');
        expect(linkedList.getLast()).toBe('second');

        linkedList.delete('second');
        linkedList.delete('first');
        expect(linkedList.getLast()).toBeNull();
        expect(linkedList.getFirst()).toBeNull();
    });

    test('양방향 삭제 시나리오 - 복잡한 케이스', () => {
        const linkedList = new LinkedList<number>();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        linkedList.delete(2);
        linkedList.delete(4);
        expect(linkedList.printList()).toEqual([1, 3, 5]);
        expect(linkedList.printListReverse()).toEqual([5, 3, 1]);

        linkedList.delete(1);
        linkedList.delete(3);
        linkedList.delete(5);
        expect(linkedList.printList()).toEqual([]);
        expect(linkedList.printListReverse()).toEqual([]);
        expect(linkedList.size()).toBe(0);
    });

    test('문자열 타입 양방향 연결리스트 테스트', () => {
        const linkedList = new LinkedList<string>();
        linkedList.append('apple');
        linkedList.append('banana');
        linkedList.append('cherry');

        expect(linkedList.printList()).toEqual(['apple', 'banana', 'cherry']);
        expect(linkedList.printListReverse()).toEqual(['cherry', 'banana', 'apple']);
        expect(linkedList.getFirst()).toBe('apple');
        expect(linkedList.getLast()).toBe('cherry');

        linkedList.delete('banana');
        expect(linkedList.printList()).toEqual(['apple', 'cherry']);
        expect(linkedList.printListReverse()).toEqual(['cherry', 'apple']);
    });
});
