//ES2015 string에 새로운 메서드들

let str = "hello world! ^^~~";
let matchstr = "hello";
let matchstr2 = "^^~~"
console.log(str.startsWith(matchstr));
// case1: true가 출력됨
// str 앞에 matchstr가 있는지 검사함

console.log(str.endsWith(matchstr2));
// case2 : true가 출력됨
// str 뒤에 matchstr2가 있는지 검사함

console.log(str.includes("world"));
// case3: true가 출력됨
// str 안에 world라는 문자열이 있는지 검사함
// 특수문자도 가능!