function somaGastoSemanal(gastosSemana: number[]): number {
    let soma = 0
    for (let dia = 0; dia < gastosSemana.length; dia++) {
        soma += gastosSemana[dia]
    }
    return soma
}

console.log(somaGastoSemanal([50, 30, 80, 20, 100, 150, 40]))