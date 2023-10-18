//제목 영역을 클릭하면 제목이 사라진다.

//제목 요소 가져오기
const title = document.querySelector("h1");

//제목 영역을 클릭하면...
title.addEventListener("click", () => {
    //삭제하라
    title.remove();
});