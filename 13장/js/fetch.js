fetch('student-2.json') //JSON 파일 읽어오기
.then(response => response.json()) //JSON 파일을 객체로 변환
.then(json => { //객체 출력
    let output ='';
    json.forEach(student => {
        output += `
        <h2>${student.name}</h2>
        <ul>
            <li>전공 : ${student.major} </li>
            <li>학년 : ${student.grade} </li>
        </ul>
        <hr>`
    });
    document.querySelector("#result").innerHTML = output;
})
.catch(error => console.log(error)); //오류 발생 시 메세지 출력
