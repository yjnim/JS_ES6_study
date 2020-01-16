var data = [1, 2, undefined, NaN, null, ""];
data.forEach(function(value) {
    console.log(value);
    // 1, 2, undefined, NaN, null, "" 출력
});

Array.prototype.getIndex = function(){};
for (let idx in data) {
    // Case1: for ~ in 구문은 자신이 갖고 있지 않은 상위의 추가된 값들까지 포함해서 결과를 나타낼 수 있다.
    // 1, 2, undefined, NaN, null, "", function(){} 출력
    console.log(data[idx]);
}

Array.prototype.getIndex = function(){};
for (let value of data) {
    // Case2: for ~ of 는 for ~ in 구문의 실수를 줄이기 위해 사용
    // 1, 2, undefined, NaN, null, "" 출력
    console.log(value);
}

var str = "hello world!";
for (let value of str) {
    // Case3 : 문자에 대한 순회나 배열을 볼 때 사용
    // "h" "e" "l" "l" "o" "w" "o" "r"  "l" "d" "!" 출력 
    console.log(value);
}