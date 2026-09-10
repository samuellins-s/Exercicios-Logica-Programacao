function nivelDeGasto(salario: number, gastoTotal: number): string {
    let percentualGasto: number = (gastoTotal / salario) * 100

    if (percentualGasto >= 80) {
        return 'Gasto alto, cuidado!'
    } else if (percentualGasto >= 50) {
        return 'Gasto moderado'
    } else {
        return 'Gasto baixo, parabéns'
    }
}

console.log(nivelDeGasto(3000, 2400))
console.log(nivelDeGasto(3000, 1500))
console.log(nivelDeGasto(3000, 900))