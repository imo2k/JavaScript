function sum (num1, num2) {
    var result = num1 + num2;  // result 는 지역 변수(지역 스코프)
}

sum(10, 20);
console.log(result);  // 오류 result가 없다.