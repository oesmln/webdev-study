// queue.ts

export class Queue<T> {
    private data: T[] = [];

    // 현재 원소 개수
    get size(): number{
        return this.data.length;
    }

    // 비어있는지 여부
    isEmpty(): boolean{
        return this.data.length === 0;
    }

    // 맨 뒤에 원소 추가
    push(value:T): void{
        this.data.push(value);
    }

    // 맨 뒤 원소 제거 후 반환
    pop(): T | undefined {
        return this.data.pop();
    }

    // 맨 뒤 원소 확인(제거 X)
    top(): T | undefined{
        if(this.data.length === 0) return undefined;
        return this.data[this.data.length-1];
    }

    // 맨 뒤에 원소 추가
    enqueue(value: T): void{
        this.data.push(value);
    }

    // 맨 앞 원소 제거 후 반환
    dequeue(): T | undefined{
        if(this.data.length === 0) return undefined;
        return this.data.shift();
    }

    // 맨 앞 원소 확인(제거 X)
    front(): T | undefined{
        if(this.data.length === 0) return undefined;
        return this.data[0];
    }
}