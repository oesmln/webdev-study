//  undefine => "값"
//  [1.undefine], [undefine.1]
//  order를 제한할 수 있지 않을까?
//  "noUncheckedIndexedAccess" : true -> 배열이나 객체에서 인덱스로 접근한 값은 undefined가 될 수도 있음
//  non-null 단언(!) -> undefined 아님 이라고 알려줌

export function simpleSort (arr: number[], order: "asc" | "desc" = "asc") : number[]{
    const sortedArr = [...arr]; // 원본 배열을 복사

    for (let i =0; i<sortedArr.length-1; i++){
        for (let j = 0; j<sortedArr.length-1-i; j++){

            let condition = order === "asc";

            if(condition){ // asc → 오름차순
                if(sortedArr[j]! > sortedArr[j+1]!){
                    const temp = sortedArr[j]!;
                    sortedArr[j] = sortedArr[j+1]!;
                    sortedArr[j+1] = temp;
                }
            } else { // desc → 내림차순
                if (sortedArr[j]! < sortedArr[j + 1]!) {
                    const temp = sortedArr[j]!;
                    sortedArr[j] = sortedArr[j + 1]!;
                    sortedArr[j + 1] = temp;
                }
            }
        }
    }
    return sortedArr;
}