var name = "global var";

function home() {
    var homevar = "homevar";

    for(let i=0; i<100; i++) {
        //1번 case
    }

    for(var i=0; i<100; i++) {
        //2번 case
    }

    console.log(i)
    //1번 case는 오류가 남 : let은 for문 안에서만 작동하기 때문
    //1번 case를 작동시키기 위해서는 for문 안에 console.log(i)가 필요
    //2번 case는 정상적으로 console에 0부터 99까지 출력
}