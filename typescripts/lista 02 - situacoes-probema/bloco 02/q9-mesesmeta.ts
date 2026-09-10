function quantosMesesMeta(meta: number, economiaPorMes: number): number {
    let meses = 0
    let soma = 0
    while (soma < meta) {
        soma += economiaPorMes
        meses++
    }
    return meses
}

console.log(quantosMesesMeta(5000, 400))