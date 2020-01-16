function addMark() {
    let newData = [];
    for (let i=0; i<arguments.length; i++) { // 인자값을 주지 않았지만, argument라는 함수로 인자를 배열 형태로 불러올 수 있음
        newData.push(arguments[i] + "!");
    }

    console.log(newData);
}

addMark(1, 2, 3, 4, 5);
// Case1: ["1!", "2!", "3!", "4!", "5!"] 출력


function addMark() {
    let newData = arguments.map(function(value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5);
// Case2: argument가 배열의 형태이지만 배열은 아니라서 error 발생

function addMark() {
    let newArray = Array.from(arguments); // from 함수는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 배열 객체를 만듬
    let newData = newArray.map(function(value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5);
// Case3: ["1!", "2!", "3!", "4!", "5!"] 출력