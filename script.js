const students = [
    {
        name: "Flávio",
        grade1: 7,
        grade2: 8
    },
    {
        name: "Isabel",
        grade1: 8,
        grade2: 10
    },
    {
        name: "Thiago",
        grade1: 5,
        grade2: 3
    },
    {
        name: "Paulo",
        grade1: 7,
        grade2: 4
    }
]

function averageResult (number1, number2) {
    const average = ((number1 + number2) / 2).toFixed(1)
    return average;
}

for(let student of students) {
    
    const name = student.name
    const firstNote = Number(student.grade1)
    const secondNote = Number(student.grade2)

    const average = averageResult(firstNote, secondNote)
    
    if (average >= 7) {
        alert(`A média do(a) aluno(a) ${name} é: ${average}
            Parabéns ${name}! Você foi aprovado(a) no concurso!`)
    }else {
        alert(`A média do(a) aluno(a) ${name} é: ${average}
            Não foi dessa vez, ${name}! Tente novamente`)
    }

}