//제목, 저자, 저장버튼, 정보 표시 영역 가져오기
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

//버튼을 클릭하면...
save.addEventListener("click", (e) => {
    e.preventDefault();//폼의 버튼을 클릭했을 때 서버로 보내지 않음
    //제목과 저자 정보를 출력
    //리스트 요소 만들기
    const item = document.createElement("li");
    //item에 내용 넣기
    item.innerHTML = `
    ${title.value} - ${author.value}
    <span class=delBtn>삭제</span>
    `;
    //정보 영역에 추가
    bookList.appendChild(item);

    //imput text 상자의 내용지우기.
    title.value="";
    author.value="";

    //목록에서 제거하기
    //삭제 버튼 요소를 모두 가져온다.
    const delBtns = document.querySelectorAll(".delBtn");
    //삭제 버튼을 누를 때마다 삭제한다.
    for(let delBtn of delBtns){
        delBtn.addEventListener("click", function(){
            this.parentNode.remove(this);
        });
    };
});
