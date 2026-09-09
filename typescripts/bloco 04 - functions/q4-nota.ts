function classificarNota(nota: number): string {
    if (nota >= 9) {
        return 'Excelente'
    
    } else if (nota >= 7) {
        return 'Bom'

    } else if (nota >= 5) {
        return 'Regular'

    } else {
        return 'Reprovado'
    }
}

console.log(classificarNota(5))