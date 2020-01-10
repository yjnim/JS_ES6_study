function home() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
    //case1 : 콘솔창에 ["apple", "orange", "watermelon", "banana"]가 출력
    //const array임에도 push는 가능하다는 것을 알 수 있다.
}

//const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
home();

//case2 : immutable array(불변 배열)는 어떻게 만들까?
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);
/* ["apple", "orange", "watermelon"]
["apple", "orange", "watermelon", "banana"] 가 출력됨 */

console.log(list === list2);
// false가 출력됨
// list와 list2는 다르다!