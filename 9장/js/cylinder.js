// // 생성자 함수 만들기
// function Cylinder(cylinderDiameter, cylinderHeight) {
//     this.diameter = cylinderDiameter; // 지름
//     this.height = cylinderHeight; // 높이

//     // 부피 계산 메서드
//     this.volume = function() {
//         //반지름 계산
//         let r = this.diameter / 2;
//         //부피 계산 Pi * r * r * height
//         return (Math.PI * r**2 * this.height).toFixed(2);
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////

//클래스 만들기
class Cylinder{
    constructor(cylinderDiameter, cylinderHeight){
        this.diameter = cylinderDiameter; // 지름
        this.height = cylinderHeight; // 높이
    }
    volume() {
        let r = this.diameter / 2;
        return (Math.PI * r**2 * this.height).toFixed(2);
    }
}

// 버튼 요소 가져오기
const btn = document.querySelector("button");
// 결과 표시 영억 가져오기
const result = document.querySelector("#result");
// 버튼을 누르면 입력한 지름과 높이을 가지고 생성자 호출
btn.addEventListener("click", function(e) {
    e.preventDefault();
    //지름 값 가져오기
    const diameter = document.querySelector('#cyl-diameter').value;
    //높이 값 가져오기
    const height = document.querySelector('#cyl-height').value;

    //빈칸인지 아닌지 cpzm
    if (diameter ==="" || height ===""){
        result.innerText="지름, 높이 값을 모두 입력하세요.";
    }
    else {
        //객체 생성
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
        //계산 결과 result에 표시
        result.innerText = `지름 : ${diameter}, 높이 : ${height}인 원기둥의 부피는 ${cylinder.volume()} 입니다`;
    }
});