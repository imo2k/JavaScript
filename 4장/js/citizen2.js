function hello() {
    return "안녕하세요?";
}
function bye(){
    return '안녕히가세요.';
}
function userCheck(name, fn) {
    console.log(`${name}남`, fn());
}

userCheck("홍길동", hello);
userCheck("도레미", bye);