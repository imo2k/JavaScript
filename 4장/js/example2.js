//두 수를 전달 받아 곱셈하는 화살표 함수 정의
let mul = (a, b) => a * b;

//두 정수 입력 받기
let a = parseInt(prompt("첫번째 숫자를 입력해주세요"));
let b = parseInt(prompt("두번째 숫자를 입력해주세요"));

//결과 화면에 출력하기
document.write(`<h2>${a} * ${b} = ${mul(a, b)}입니다.</h2>`);