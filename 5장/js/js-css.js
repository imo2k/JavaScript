//제목 가져오기
const title = document.querySelector("#title");

//아이디가 title인 요소를 클릭하면 배경색과 글자색 수정
title.onclick = () => {
    title.style.backgroundColor = "green";//배경
    title.style.color = "pink";//글자
}