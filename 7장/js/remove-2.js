//리스트를 클릭하면 해당 리스트 내용 삭제

//리스트의 모든 항목을 가져온다.
const items = document.querySelectorAll("li");

//item은 items 노드 리스트의 li를 가리킨다
for(let item of items){
    //해당 항목을 클릭했을 때 실행할 함수
    item.addEventListener("click", function(){
        //this.remove(this); -> 자신 삭제
        //this는 이벤트가 발생한 노드를 가리킴
        //화살표 함수가 아닌 익명함수를 사용해야함(정해져있음)
        //부모 노드에서 삭제된다.
        this.parentNode.removeChild(this);
    });

}