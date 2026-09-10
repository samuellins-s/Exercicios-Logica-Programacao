function totalGastos(gastos: number[]): number {
    let soma = 0
    for (let dia = 0; dia < gastos.length; dia++) {
        soma += gastos[dia]
    }
    return soma
}

console.log(totalGastos([50, 30, 80, 20, 100, 150, 40]))
console.log(totalGastos([10, 10, 10]))