//버튼의 요소 가져오기
const btn = document.querySelector("button");//태그가 버튼인 것을 가져와서 btn에 적용
/*
//display() 함수 정의
function display() {
    alert("버튼을 클릭했습니다.");
}

//버튼을 클릯하면 display() 함수 실행.
btn.addEventListener("click", display);

*/

btn.addEventListener("click", () =>{
    alert("버튼");
})
btn.addEventListener("click", display);


