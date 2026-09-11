function classificarGasto(valor: number): string {
    if (valor > 500) return 'Gasto grande' 
    else if (valor > 100) return 'Gasto médio'
    else return 'Gasto pequeno'
}

console.log(classificarGasto(700))
console.log(classificarGasto(200))
console.log(classificarGasto(50))