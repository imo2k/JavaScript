//인수의 일부분만 나머지 매개변수로 받기

function fav(first, ...favs){
    let str = `가장 좋아하는 과일은 ${first}입니다.`;
    return str;
}
console.log(fav("포도", "바나나", "망고", "사과"));