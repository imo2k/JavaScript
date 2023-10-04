const button = document.querySelector("button");

button.onclick = () =>{
    //document.body.classList.toggle("dark"); (body 전체 영역 다크모드)
    const contents = document.getElementById("contents");//div id 중 contents영역만 선택
    contents.classList.toggle("dark");
}

