// 함수에서 다른 함수를 반환하기
let init = () => {
  return function(a, b) {
    return a - b > 0 ? a - b : b - a;
  }
}

console.log(`init(30, 20) : ${init(30, 20)}`);
console.log(`init()(30, 20) : ${init()(10, 20)}`);
