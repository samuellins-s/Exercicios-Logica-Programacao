function somarPares(limite: number): number {
    let soma = 0
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i
        }
    }

    return soma
}

console.log(somarPares(20))
console.log(somarPares(10))