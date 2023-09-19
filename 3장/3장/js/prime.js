//소수 판단 스크립트
//정수를 입력 받는다 prompt
//소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수
// 나누어 떨어진다 , 나머지 = 0

const num = parseInt(prompt("숫자를 입력해주세요"));

if(num <= 1) { //1은 소수가 아닌 자연수 이기 때문에 제외
    alert(`${num}은 소수가 아닙니다.`);
} else {
    let isPrime = true;
    for (let i = 2; i < num; i++) {//i값을 1부터 순차적으로 증가 num값은 2부터
        if (num % i === 0) { // num / (num-1)의 나머지 값 0
            isPrime = false;
            break; //false값이 나올 경우 break
        }
    }
    if(isPrime){
        alert(`${num}은 소수입니다.`)//true
    }else{
        alert(`${num}은 소수가 아닙니다.`)//false
    }
    }



