var list = document.querySelectorAll('li');

//case1 : li가 4개면, 모든 리스트를 클릭할 때마다 '4번째 리스트 입니다.'가 출력됨
// 밖에 있는 i값을 참조를 유지하면서 share하고 있기 때문에 이런 일이 생김
for (var i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다.");
    });
}

//case2 : li에 차례대로 0번부터 부여되며 0번째 ~ 3번째 리스트인 것이 정상적으로 출력
for (let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다.");
    });
}