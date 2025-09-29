// linkedList.ts

class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;
    constructor(value: T){
        this.value = value;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private _size = 0;

    size() : number{
        return this._size;
    }

    append(value: T) : void{
        const node = new Node<T>(value);

        if (this.head === null){
            this.head = node;
            this.tail = node;
        } else{
            node.prev = this.tail;
            if (this.tail) this.tail.next = node;
            this.tail = node;
        }
        this._size += 1;
    }

    delete(value: T) : void{
        if(this.head === null) return;

        let curr: Node<T> | null = this.head;

        while (curr){
            if (curr.value === value){
                const prev = curr.prev;
                const next = curr.next;

                if(prev) prev.next = next;
                else this.head = next;

                if(next) next.prev = prev;
                else this.tail = prev;

                this._size -=1;
                return;
            }
            curr = curr.next;
        }

    }

    search(value: T): T| null {
        let curr = this.head;
        while(curr){
            if(curr.value === value) return curr.value;
            curr = curr.next;
        }
        return null;
    }

    printList() : T[]{
        const result: T[]= [];
        let curr = this.head;
        while(curr){
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }

    printListReverse():T[]{
        const result: T[]=[];
        let curr = this.tail;
        while(curr){
            result.push(curr.value);
            curr = curr.prev;
        }
        return result;
    }

    getFirst(): T | null{
        return this.head ? this.head.value : null;
    }

    getLast(): T | null{
        return this.tail ? this.tail.value : null;
    }


}