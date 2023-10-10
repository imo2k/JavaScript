//버튼 클릭하면 배경색 바꾸기
//아이디가 btn1인 요소 가져오기
const button1 = document.querySelector("#btn1");

button1.onclick = function() {
    document.body.style.backgroundColor="blue";
}

//배경 바꾸는 함수 따로 정의하기
function changebackground() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}

const button2 = document.querySelector("#btn2");
button2.onclick = changebackground;

//두 가지 이벤트 처리하기
/*
    onclick=alert('두 가지 이벤트 처리')는 실행되지 않는다.
    on이벤트 프로퍼티는 하나만 사용이 가능하기 때문이다.
    마지막 사용한 onclick이 적용되어 배경색만 바뀐다.
    이벤트에 여러 함수를 연결하려면 addEventListener()를 사용해야 한다.
*/
const button3 = document.querySelector("#btn3");

button3.onclick = function() {
    document.body.style.backgroundColor="orange";
}
//이벤트 리스너 사용
const button4 = document.querySelector("#btn4");

button4.addEventListener("click", () => {
    document.body.style.backgroundColor="yellow";
});
//배경, 글자색 토글하기
const button5 = document.querySelector("#btn5");

button5.addEventListener("click", () => {
    document.body.style="";
    document.body.classList.toggle("convert"); //body 전체 영역 다크모드
});

//텍스트 필드에 입력한 글자 수 알아보기
const button6 = document.querySelector("#btn6");

button6.addEventListener("click", () => {
    const word = document.querySelector("#word").value; //text상자의 내용 가져옴
    const result = document.querySelector("#result");

    let count = word.length; //문자열 길이
    result.innerText = `${count}`;//결과 표시
});