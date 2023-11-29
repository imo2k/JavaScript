function whatsYourFavorite() {
    let fav = "Javascript";
    //resolve 일때 Javascript 반환
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
    //resolve일때 whatsYourFavorite() 함수 결과를 받아서 반환
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`))
}

whatsYourFavorite()
//.then(response => displaySubject(response))
.then(displaySubject)
//.then(result => console.log(result))
.then(console.log);