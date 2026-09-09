function verificarAprovacao(notas: number[]): string {
    let soma = 0
    for (let nota = 0; nota < notas.length; nota++ ) {
        soma += notas[nota]
    }

    let media: number = (soma / notas.length)

    if (media >= 7) {
        return 'Aprovado direto!!!'
    } else if (media >= 5 && media < 7) {
        return 'Prova final!!!'
    } else {
        return 'Reprovado!!!'
    }
}

console.log(verificarAprovacao([8, 9, 7]))
console.log(verificarAprovacao([6, 5, 6]))
console.log(verificarAprovacao([3, 4, 2]))