let num = parseInt(prompt("정수를 입력해주세요."));

if (num != null){
    if(num % 3 === 0){
        alert("3의 배수입니다.")
    }
    else {
        alert("3의 배수가 아닙니다.")
    }
}
else {
    alert("입력이 취소되었습니다.")
}