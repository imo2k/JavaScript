const factor = 5;//변수 선언 및 생성.

function calc() {
    return num * factor;// num값 undefined
}

{
    const num = 10;//지역변수
    let result = calc(); //함수 호출
    console.log(`result : ${result}`);
}
