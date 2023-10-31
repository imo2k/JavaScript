// 반지름 입력 받아 원의 넓이와 둘레를 출력한다.
// 반지름은 propmt로 입력받는다
// 원의 넓이와 둘레를 구하는 함수를 각각 작성합니다.
// 넓이와 둘레는 소수 3자리까지 출력합니다.

 function area(r) {
    return Math.PI * r**2;
}

function circle(r) {
    return Math.PI * 2 * r;
}

const result = document.querySelector("#result");
const radius = prompt("반지름을 입력해주세요");

result.innerText=
`반지름 : ${radius}
원의 넓이 : ${area(radius).toFixed(3)} 
원의 둘레 : ${circle(radius).toFixed(3)}`;
