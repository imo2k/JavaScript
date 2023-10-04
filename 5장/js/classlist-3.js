// 아이디가 title인 요소를 가지고 와서 title 변수에 저장.
const title = document.querySelector("#title");


title.onclick = () => {
    title.classList.toggle("clicked");
}
// title.onclick = () => {
//     //clicked style이 없으면 스타일 추가
//     if(!title.classList.contains("clicked")){
//         title.classList.add("clicked");
//     }
//     //없으면 스타일 제거
//     else{
//         title.classList.remove("clicked");
//     }
// }