// 화살표 함수.
// 매개 변수 2개인 함수
let sum = (a, b) => {
    let result = a + b;
    return result;
}

// 매개 변수가 없을 때
let hi = () => {
    return '안녕하세요.';
}

hi();   // 함수 호출

// return 생락 가능.
let hi1 = () => { '안녕하세요.'; }

// 매개 변수 1개 일때
let hi2 = user => { console.log(`${user}님 안녕하세요.`); }
hi2("김지연");