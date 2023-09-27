//반복되는 실행 멈추기
let count = 0;
let timer = setInterval(() => {
    console.log("안녕하세요.");
    count ++;
    if(count === 5)
    clearInterval(timer);
}, 2000);