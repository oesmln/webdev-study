export class HashTable<K extends string | number, V> {
  // 해시 테이블의 각 버킷을 저장하는 배열
  // buckets[i] 안에는 [key, value] 형태의 튜플이 여러 개 들어갈 수 있음
  private buckets: Array<Array<[K, V]>>;

  // 저장된 key-value 쌍의 개수
  private count: number;

  // 리사이징을 결정하는 최대 적재율
  private readonly maxLoadFactor: number;

  constructor(initialCapacity = 16, maxLoadFactor = 0.75) {
    // 최소 4 이상의 용량을 확보
    const cap = Math.max(4, initialCapacity | 0);

    // cap 길이만큼 비어 있는 버킷 배열 초기화
    this.buckets = Array.from({ length: cap }, () => [] as Array<[K, V]>);

    this.count = 0;
    this.maxLoadFactor = maxLoadFactor;
  }

  // key를 해시값(숫자)으로 변환
  private hash(key: K): number {
    if (typeof key === 'number') {
      // 정수 기반 해시 알고리즘
      let x = key | 0;
      x = ((x >>> 16) ^ x) * 0x45d9f3b;
      x = ((x >>> 16) ^ x) * 0x45d9f3b;
      x = (x >>> 16) ^ x;
      return x >>> 0;
    } else {
      // 문자열 기반 해시(djb2 변형)
      let h = 5381;
      for (let i = 0; i < key.length; i++) {
        h = (h * 33) ^ key.charCodeAt(i);
      }
      return h >>> 0;
    }
  }

  // key가 들어갈 버킷 인덱스 반환
  private getBucketIndex(key: K): number {
    return this.hash(key) % this.buckets.length;
  }

  // key-value 추가 / 업데이트
  set(key: K, value: V): void {
    const idx = this.getBucketIndex(key);
    const bucket = this.buckets[idx];

    // 같은 키가 이미 있으면 값을 갱신
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // 새로운 (key, value) 삽입
    bucket.push([key, value]);
    this.count++;

    // 적재율 초과 시 리사이징
    if (this.count / this.buckets.length > this.maxLoadFactor) {
      this.resize();
    }
  }

  // key에 해당하는 value 반환 (없으면 undefined)
  get(key: K): V | undefined {
    const idx = this.getBucketIndex(key);
    const bucket = this.buckets[idx];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return undefined;
  }

  // key 존재 여부 검사
  has(key: K): boolean {
    const idx = this.getBucketIndex(key);
    return this.buckets[idx].some(([k]) => k === key);
  }

  // 테이블에 있는 모든 [key, value]를 하나의 배열로 반환
  entries(): Array<[K, V]> {
    return this.buckets.flat() as Array<[K, V]>;
  }

  // 모든 데이터를 초기화
  clear(): void {
    const len = this.buckets.length;
    this.buckets = Array.from({ length: len }, () => [] as Array<[K, V]>);
    this.count = 0;
  }

  // 버킷 크기를 2배로 늘리고 모든 데이터를 재배치
  private resize(): void {
    const newLen = this.buckets.length * 2;

    const newBuckets: Array<Array<[K, V]>> = Array.from(
      { length: newLen },
      () => [] as Array<[K, V]>
    );

    // 기존 버킷의 모든 데이터를 새 버킷에 다시 해싱하여 넣음
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        const newIdx = this.hash(key) % newLen;
        newBuckets[newIdx].push([key, value]);
      }
    }

    // 새 버킷으로 교체
    this.buckets = newBuckets;
  }
}