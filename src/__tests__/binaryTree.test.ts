import { BinaryTree } from '../binaryTree';

// 삭제 연산 시 오른쪽 서브트리의 최소값을 옮기는 것으로 가정함

describe('이진트리 테스트', () => {
  test('빈 이진트리에서 inOrder, preOrder, postOrder, levelOrder 순회시 빈 배열을 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    expect(binaryTree.inOrderTraversal()).toEqual([]);
    expect(binaryTree.preOrderTraversal()).toEqual([]);
    expect(binaryTree.postOrderTraversal()).toEqual([]);
    expect(binaryTree.levelOrderTraversal()).toEqual([]);

  });

  test('2, 1, 3 을 순서대로 insert 후 inOrder, preOrder, postOrder, levelOrder 순회시 올바른 결과를 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(2);
    binaryTree.insert(1);
    binaryTree.insert(3);
    expect(binaryTree.inOrderTraversal()).toEqual([1, 2, 3]);
    expect(binaryTree.preOrderTraversal()).toEqual([2, 1, 3]);
    expect(binaryTree.postOrderTraversal()).toEqual([1, 3, 2]);
    expect(binaryTree.levelOrderTraversal()).toEqual([2, 1, 3]);
  });


  test('4, 2, 6, 1, 3, 5, 7 을 순서대로 insert 후 inOrder, preOrder, postOrder, levelOrder 순회시 올바른 결과를 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(4);
    binaryTree.insert(2);
    binaryTree.insert(6);
    binaryTree.insert(1);
    binaryTree.insert(3);
    binaryTree.insert(5);
    binaryTree.insert(7);
    expect(binaryTree.inOrderTraversal()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(binaryTree.preOrderTraversal()).toEqual([4, 2, 1, 3, 6, 5, 7]);
    expect(binaryTree.postOrderTraversal()).toEqual([1, 3, 2, 5, 7, 6, 4]);
    expect(binaryTree.levelOrderTraversal()).toEqual([4, 2, 6, 1, 3, 5, 7]);
  });

  test('빈 이진트리에서 search 연산시 null을 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    expect(binaryTree.search(1)).toBeNull();
  });

  test('2, 1, 3 을 순서대로 insert 후 search 연산시 올바른 결과를 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(2);
    binaryTree.insert(1);
    binaryTree.insert(3);
    expect(binaryTree.search(1)).toBe(1);
    expect(binaryTree.search(2)).toBe(2);
    expect(binaryTree.search(3)).toBe(3);
  });

  test('2, 1, 3을 순서대로 insert 후 remove 후 inOrder, preOrder, postOrder, levelOrder 순회시 올바른 결과를 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(2);
    binaryTree.insert(1);
    binaryTree.insert(3);
    binaryTree.remove(2);
    expect(binaryTree.inOrderTraversal()).toEqual([1, 3]);
    expect(binaryTree.preOrderTraversal()).toEqual([3, 1]);
    expect(binaryTree.postOrderTraversal()).toEqual([1, 3]);
    expect(binaryTree.levelOrderTraversal()).toEqual([3, 1]);
  });

  test('4, 2, 6, 1, 3, 5, 7 을 순서대로 insert 후 remove 후 inOrder, preOrder, postOrder, levelOrder 순회시 올바른 결과를 반환한다.', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(4);
    binaryTree.insert(2);
    binaryTree.insert(6);
    binaryTree.insert(1);
    binaryTree.insert(3);
    binaryTree.insert(5);
    binaryTree.insert(7);
    binaryTree.remove(4);
    expect(binaryTree.inOrderTraversal()).toEqual([1, 2, 3, 5, 6, 7]);
    expect(binaryTree.preOrderTraversal()).toEqual([5, 2, 1, 3, 6, 7]);
    expect(binaryTree.postOrderTraversal()).toEqual([1, 3, 2, 7, 6, 5]);
    expect(binaryTree.levelOrderTraversal()).toEqual([5, 2, 6, 1, 3, 7]);
  });
});