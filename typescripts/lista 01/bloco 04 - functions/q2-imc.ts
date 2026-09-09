function calcularIMC(peso: number, altura: number): number {
    let imc: number = peso / (altura**2)
    return imc
}

console.log(calcularIMC(70, 1.75))