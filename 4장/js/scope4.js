const factor = 5;   // 변수 선언 및 생성.

function calc() {
    return num * factor;  // 오류 발생.
}

{
    const num = 10; // 지역 변수
    let result = calc();  // 함수 호출
    console.log(`result : ${result}`);
}