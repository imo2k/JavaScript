//모든 span 항목 가져오기
const btns = document.querySelectorAll("p > span");
//항목 중에서 하나를 선택하여 클릭하면
for(let btn of btns){
    btn.addEventListener("click", function(){
        //해당 요소가 있는 내용 삭제
        //x를 누르면 x와 내용이 모두 삭제되어야함.
        //span 항목을 클릭하면 부모노드인 p 삭제
        this.parentNode.remove(this);
    });
}