function calMulti(num1, num2){
    return num1 * num2; //곱 결과 반환
}

let num1 = parseInt(prompt("첫번째 숫자를 입력해주세요"));
let num2 = parseInt(prompt("두번째 숫자를 입력해주세요"));

let result = calMulti(num1, num2);//변수에 저장

document.write(`<h1>${num1}과 ${num2}까지의 곱은 ${result}입니다.</h1>`);
