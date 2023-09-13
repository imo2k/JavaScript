//섭씨 = (화씨 - 32) / 1.8
//프롬프트로 화씨 온도 입력받기
//섭씨 온도 계산하고, 출력한다.
//출력은 alert() 또는 Document.write() 중 하나 선택.
// 화씨 온도 **도는 섭씨 온도 **도 입니다.
//화씨 fahrenheit    //섭씨 celsius

let fah = parseFloat(prompt("화씨 온도를 입력해주세요"));
let cel;


cel = ((fah -32) / 1.8).toFixed(1);
alert(`화씨 온도${fah}도는 섭씨 온도${cel} 도입니다.`);
document.write(`화씨 온도${fah}도는 섭씨 온도${cel} 도입니다.`);