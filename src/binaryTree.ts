export class BinaryTree<T> {
  private nodes: (T | undefined)[] = [];

  private compare: (a: T, b: T) => number;
  constructor(compareFn?: (a: T, b: T) => number) {
    this.compare = compareFn ?? ((a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0));
  }

  insert(value: T): void {

    if (this.nodes.length === 0 || this.nodes[0] === undefined) {
      this.nodes[0] = value;
      return;
    }
    let i = 0;

    while (true) {
      const cur = this.nodes[i] as T; 
      const cmp = this.compare(value, cur);
      if (cmp === 0) {
        return;
      }
      const next = cmp < 0 ? 2 * i + 1 : 2 * i + 2;
      if (this.nodes[next] === undefined) {
        this.nodes[next] = value; 
        return;
      }
      i = next;
    }
  }

  search(value: T): T | null {
    let i = 0;
    while (i < this.nodes.length) {
      const cur = this.nodes[i];
      if (cur === undefined) return null;
      const cmp = this.compare(value, cur);
      if (cmp === 0) return cur;
      i = cmp < 0 ? 2 * i + 1 : 2 * i + 2;
    }
    return null;
  }

  remove(value: T): void {
    let i = 0;
    while (i < this.nodes.length) {
      const cur = this.nodes[i];
      if (cur === undefined) return; 
      const cmp = this.compare(value, cur);
      if (cmp === 0) {
        this.removeAt(i);
        return;
      }
      i = cmp < 0 ? 2 * i + 1 : 2 * i + 2;
    }
  }

  inOrderTraversal(): T[] {
    const out: T[] = [];
    const dfs = (i: number) => {
      if (i >= this.nodes.length) return;
      const v = this.nodes[i];
      if (v === undefined) return;
      dfs(2 * i + 1);
      out.push(v);
      dfs(2 * i + 2);
    };
    dfs(0);
    return out;
  }

  preOrderTraversal(): T[] {
    const out: T[] = [];
    const dfs = (i: number) => {
      if (i >= this.nodes.length) return;
      const v = this.nodes[i];
      if (v === undefined) return;
      out.push(v);
      dfs(2 * i + 1);
      dfs(2 * i + 2);
    };
    dfs(0);
    return out;
  }

  postOrderTraversal(): T[] {
    const out: T[] = [];
    const dfs = (i: number) => {
      if (i >= this.nodes.length) return;
      const v = this.nodes[i];
      if (v === undefined) return;
      dfs(2 * i + 1);
      dfs(2 * i + 2);
      out.push(v);
    };
    dfs(0);
    return out;
  }

  levelOrderTraversal(): T[] {
    const out: T[] = [];
    if (this.nodes.length === 0 || this.nodes[0] === undefined) return out;
    const q: number[] = [0];
    while (q.length) {
      const i = q.shift() as number;
      const v = this.nodes[i];
      if (v === undefined) continue;
      out.push(v);
      const li = 2 * i + 1;
      const ri = 2 * i + 2;
      if (li < this.nodes.length && this.nodes[li] !== undefined) q.push(li);
      if (ri < this.nodes.length && this.nodes[ri] !== undefined) q.push(ri);
    }
    return out;
  }


  private removeAt(i: number): void {
    const li = 2 * i + 1;
    const ri = 2 * i + 2;
    const hasLeft = li < this.nodes.length && this.nodes[li] !== undefined;
    const hasRight = ri < this.nodes.length && this.nodes[ri] !== undefined;

    if (!hasLeft && !hasRight) {
      this.nodes[i] = undefined;
      return;
    }

    if (hasLeft && !hasRight) {
      this.nodes[i] = this.nodes[li];
      this.removeAt(li);
      return;
    }
    if (!hasLeft && hasRight) {
      this.nodes[i] = this.nodes[ri];
      this.removeAt(ri);
      return;
    }

    const minIdx = this.findMinIndex(ri);
    this.nodes[i] = this.nodes[minIdx];
    this.removeAt(minIdx);
  }

  private findMinIndex(i: number): number {
    let cur = i;
    while (true) {
      const li = 2 * cur + 1;
      if (li < this.nodes.length && this.nodes[li] !== undefined) cur = li;
      else break;
    }
    return cur;
  }
}