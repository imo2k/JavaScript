// 변수에 할당하기
let sum = (a, b) => a + b;
sum(2, 10);

function add(a, b) {
  return a + b;
}

let sum1 = add;  // 함수 할당. add 뒤에 () 붙이지 않는다. ()붙이면 함수 실행의 의미/
sum1(2, 10);