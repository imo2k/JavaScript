const result = document.querySelector("#result");
const birthday = new Date("1999-06-18");
const today = new Date();

//생일로부터 오늘까지 흐른 시간 계산
let passedTime = today.getTime() - birthday.getTime();

//밀리초를 일로 계산
let passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

//결과출력
result.innerText = passedDay;