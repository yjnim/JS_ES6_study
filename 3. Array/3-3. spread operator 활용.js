let pre = [100, 200, "hello", null];
let newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);
// Case1: [0, 1, 2, 3, 100, 200, "hello", null, 4] 출력

function sum(a,b,c) {
    return a+b+c;
}

let pre = [100, 200, 300];

console.log(sum.apply(null, pre));
// 배열 그대로를 전달해 줄 때 apply()함수 사용
// 첫번째 인자는 어디에서 호출하는지 설명. null이나 undefined일 경우 전역 객체로 대체
// Case2: 600 출력

console.log(sum(...pre));
// Case3: 600 출력
// ...로 배열을 펼쳐 훨신 편리하게 사용