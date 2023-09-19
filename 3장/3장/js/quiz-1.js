
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 반복문 for로 배열에서 10보다 큰 값 출력하기
for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 10) {
   document.write(`${arr[i]}, `);
  }
}
document.write(`<hr>`);
// 반복문 forEach로 배열에서 10보다 큰 값 출력하기
arr.forEach(function(a) {
    if(a > 10){
        document.write(`${a}, `);
    }
});
document.write(`<hr>`);
// 반복문 for...of로 배열에서 10보다 큰 값 출력하기
for (let a of arr) {
    if(a > 10){
        document.write(`${a}, `);
    }
}
document.write(`<hr>`);