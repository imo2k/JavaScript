const userNumber = document.querySelector("#user-number");
const btn = document.querySelector("button"); //버튼은 id X => # 안씀

btn.addEventListener("click", () => {
    let n = userNumber.value;
    try {
        if(n === "" || isNaN(n)) {//공란 또는 Not a Number인 경우에는 thow메시지 출력
            throw "숫자를 입력하세요";
        }
        n = Number(n);
        if(n <= 10) {
            document.querySelector("#result").innerText = n;
        }
        if(n > 10) {
            throw "10보다 작은 수를 입력하세요."
        }
    } catch (error) {
        alert(error);
    } finally {
        userNumber.value = "";
    }
});