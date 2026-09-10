function passaramDoLimiteDiario(gastosSemana: number[], limiteDiario: number): number {
    let contadorDias = 0

    for (let dia = 0; dia < gastosSemana.length; dia++) {
        if (gastosSemana[dia] > limiteDiario) {
            contadorDias += 1
        }
    }
    return contadorDias
}

console.log(passaramDoLimiteDiario([50, 30, 80, 20, 100, 150, 40], 60))