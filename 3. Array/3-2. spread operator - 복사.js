let pre = ["apple", "orange", 100];
let newData = [...pre];
// ...은 펼침연산자로, ... 뒤의 값을 펼쳐서 보여주는 연산자

console.log(pre, newData);
// Case1: ["apple", "orange", 100] ["apple", "orange", 100] 출력

console.log(pre === newData);
// Case2: 메모리에 새로운 공간을 만들고 복사한 케이스
// false 출력

