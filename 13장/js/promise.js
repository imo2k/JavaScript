// Promise 객체 만들기 (제작 코드)
let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if(likePizza) {
        resolve('피자를 주문합니다.');
    } else {
        reject('피자를 주문하지 않습니다.');
    }
});

// Promise 객체 사용하기 (소비코드)
pizza
    .then(// Promise에서 성공한 결과를 보냈을 때 then 실행
        result => console.log(result)
    )
    .catch(// Promise에서 실패 결과를 보냈을 때 catch 실행
        err => console.log(err)
    )
    .finally( // 결과와 상관 없이 finally 실행
        () => console.log('완료')
    ); //세미콜론은 끝나는 문장에만 