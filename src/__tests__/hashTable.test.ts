import { HashTable } from '../hashTable';

describe('해시테이블 테스트', () => {
  test('빈 해시테이블에서 entries 메서드 호출시 빈 배열을 반환한다.', () => {
    const hashTable = new HashTable<number, number>();
    expect(hashTable.entries()).toEqual([]);
  });

  test('number, number 타입을 가진 데이터를 순서대로 set 후 entries 메서드 호출시 올바른 결과를 반환한다.', () => {
    const hashTable = new HashTable<number, number>();
    hashTable.set(2, 2);
    hashTable.set(1, 1);
    hashTable.set(3, 3);
    expect(hashTable.entries()).toEqual(
    expect.arrayContaining([
      [2, 2],
      [1, 1],
      [3, 3],
    ])
  );
  });

  test('string, number 타입을 가진 데이터를 순서대로 set 후 get 메서드 호출시 올바른 결과를 반환한다.', () => {
    const hashTable = new HashTable<string, number>();
    hashTable.set('apple', 1);
    hashTable.set('banana', 2);
    hashTable.set('cherry', 3);
    expect(hashTable.get('apple')).toBe(1);
    expect(hashTable.get('banana')).toBe(2);
    expect(hashTable.get('cherry')).toBe(3);
  });

  test('string, string[] 타입을 가진 데이터를 순서대로 set 후 get메서드 호출시 올바른 결과를 반환한다.', () => {
    const kpopGroup = new HashTable<string, string[]>();
    kpopGroup.set('bts', ['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook']);
    kpopGroup.set('ive', ['장원영', '안유진', '레이', '가을', '리즈', '이서']);
    expect(kpopGroup.get('bts')).toEqual(['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook']);
    expect(kpopGroup.get('ive')).toEqual(['장원영', '안유진', '레이', '가을', '리즈', '이서']);
    expect(kpopGroup.get('aespa')).toBeUndefined();
  });

  test('string, boolean 을 순서대로 set후 get 메서드 호출시 올바른 결과를 반환한다.', () => {
    const userLoggedIn = new HashTable<string, boolean>();
    userLoggedIn.set('user1', true);
    userLoggedIn.set('user2', false);
    expect(userLoggedIn.get('user1')).toBe(true);
    expect(userLoggedIn.get('user2')).toBe(false);
  });

  test('string, 유저 정의 타입을 가진 데이터를 순서대로 set후 has 메서드 호출시 올바른 결과를 반환한다.', () => {
    type User = {
      name: string;
      age: number;
      email: string;
    };
    const user = new HashTable<number, User>();
    user.set(1, { name: 'faker', age: 20, email: 'faker@pusan.ac.kr' });
    user.set(2, { name: 'bdd', age: 21, email: 'bdd@pusan.ac.kr' });
    expect(user.has(1)).toBe(true);
    expect(user.has(2)).toBe(true);
    expect(user.has(3)).toBe(false);
  });

  test('같은 key를 가진 데이터를 순서대로 set후 get 메서드 호출시 마지막으로 설정한 데이터를 반환한다.', () => {
    type User = {
      name: string;
      age: number;
      email: string;
    };
    const user = new HashTable<number, User>();
    user.set(1, { name: 'faker', age: 20, email: 'faker@pusan.ac.kr' });
    user.set(1, { name: 'bdd', age: 21, email: 'bdd@pusan.ac.kr' });
    expect(user.get(1)).toEqual({ name: 'bdd', age: 21, email: 'bdd@pusan.ac.kr' });
  });

  test('clear 메서드 호출시 빈 해시테이블이 된다.', () => {
    const hashTable = new HashTable<number, number>();
    hashTable.set(1, 1);
    hashTable.set(2, 2);
    hashTable.set(3, 3);
    hashTable.clear();
    expect(hashTable.entries()).toEqual([]);
  });

  test('빈 해시테이블에서 get 연산시 undefined를 반환한다.', () => {
    const hashTable = new HashTable<number, number>();
    expect(hashTable.get(1)).toBeUndefined(); 
  });
});