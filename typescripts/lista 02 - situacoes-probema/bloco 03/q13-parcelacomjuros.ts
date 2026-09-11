function calcularParcela(valorTotal: number, parcelas: number, jurosPercentual: number = 5): number {
    return (valorTotal + valorTotal * jurosPercentual / 100) / parcelas
}

console.log(calcularParcela(1000, 10))
console.log(calcularParcela(1000, 10, 0))