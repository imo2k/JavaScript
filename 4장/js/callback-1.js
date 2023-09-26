// 버튼의 요소 가져오기
const btn = document.querySelector("button");

/*
// display() 함수 정의
function dislpay() {
    alert("버튼을 클릭했니다.");
}

// 버튼을 클릭하면 dislpay() 함수 실행.
btn.addEventListener("click", dislpay);
*/

// 함수에 직접 작성하여 콜백 함수 실행.
btn.addEventListener("click", () => {
    alert("버튼 클릭!");
});