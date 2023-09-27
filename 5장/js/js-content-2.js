//제목 가져오기
const title = document.querySelector("#title");

//이름 가져오기
const userName = document.querySelector("#desc p");
//const userName = document.querySelector("#desc p")[0];

//프로필 이미지 가져오기
const pfImg = document.querySelector("#profile img");

//제목 영역을 클릭하면 내용을 바꾼다.
title.onclick = () => title.innerText = "프로필";

//이름 영역을 클릭하면 이름만 찐하게 만들어라
userName.ondblclick = () => userName.innerHTML = "이름 : <b>고욱현</b>";

//이미지 영역을 클릭하면 이미지를 바꾼다.(이미지의 파일(경로를 포함하여)을 바꾼다.)
pfImg.onclick = () => pfImg.src="images/pf2.png";