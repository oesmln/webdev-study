export class Heap<T> {
    private items: T[] = [];
    private readonly compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number){
        this.compare = compare;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    peek(): T {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        return this.items[0];
    }

    push(value: T): void {
        this.items.push(value);
        this.bubbleUp(this.items.length - 1);
    }

    pop(): T {
        if(this.isEmpty()){
            throw new Error('Heap is empty');
        }
        const root = this.items[0];
        const last = this.items.pop() as T;

        if(!this.isEmpty()){
            this.items[0] = last;
            this.bubbleDown(0);
        }

        return root;
    }

    private bubbleUp(index: number): void{
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.compare(this.items[index], this.items[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const length = this.items.length;

        while (true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let best = index;

            if (left < length && this.compare(this.items[left], this.items[best]) < 0) {
                best = left;
            }

            if (right < length && this.compare(this.items[right], this.items[best]) < 0) {
                best = right;
            }

            if (best === index) break;

            this.swap(index, best);
            index = best;
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    }
}