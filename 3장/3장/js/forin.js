const student = {
    major : "컴퓨터공학과",
    idNum : 201894005,
    name : '고욱현'
}

for (key in student) {
    document.write(`${key} : ${student[key]}<br>`)
}