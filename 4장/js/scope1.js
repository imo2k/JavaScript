function sum (num1, num2){
    var result = num1 + num2;//result는 로컬 스코프
}
sum(10,20);
console.log(result);//result 찾을 수 없음