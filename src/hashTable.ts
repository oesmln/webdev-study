export class HashTable<K extends string | number, V> {
  private buckets: Array<Array<[K, V]>>;
  private count: number;
  private readonly maxLoadFactor: number;

  constructor(initialCapacity = 16, maxLoadFactor = 0.75) {
    const cap = Math.max(4, initialCapacity | 0);
    this.buckets = Array.from({ length: cap }, () => []);
    this.count = 0;
    this.maxLoadFactor = maxLoadFactor;
  }

  private hash(key: K): number {
    if (typeof key === 'number') {
      let x = key | 0;
      x = ((x >>> 16) ^ x) * 0x45d9f3b;
      x = ((x >>> 16) ^ x) * 0x45d9f3b;
      x = (x >>> 16) ^ x;
      return x >>> 0;
    } else {
      let h = 5381;
      for (let i = 0; i < key.length; i++) {
        h = (h * 33) ^ key.charCodeAt(i);
      }
      return h >>> 0;
    }
  }

  private getBucketIndex(key: K): number {
    return this.hash(key) % this.buckets.length;
  }

  set(key: K, value: V): void {
    const idx = this.getBucketIndex(key);
    const bucket = this.buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.count++;
    if (this.count / this.buckets.length > this.maxLoadFactor) {
      this.resize();
    }
  }

  get(key: K): V | undefined {
    const idx = this.getBucketIndex(key);
    const bucket = this.buckets[idx];
    for (let [k, v] of bucket) {
      if (k === key) return v;
    }
    return undefined;
  }

  has(key: K): boolean {
    const idx = this.getBucketIndex(key);
    return this.buckets[idx].some(([k]) => k === key);
  }

  entries(): [K, V][] {
    return this.buckets.flat();
  }

  clear(): void {
    this.buckets = Array.from({ length: this.buckets.length }, () => []);
    this.count = 0;
  }

  private resize(): void {
    const newBuckets = Array.from({ length: this.buckets.length * 2 }, () => []);
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        const newIdx = this.hash(key) % newBuckets.length;
        newBuckets[newIdx].push([key, value]);
      }
    }
    this.buckets = newBuckets;
  }
}