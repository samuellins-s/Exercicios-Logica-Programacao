function qualMaiorGasto(listaGastos: number[]): string {
    let maior = 0
    let diaDoMaior = 0

    for (let dia = 0; dia < listaGastos.length; dia++) {
        if (listaGastos[dia] > maior) {
            maior = listaGastos[dia]
            diaDoMaior = dia + 1 // + 1 pois o indice começa em 0
        }
    }
    return `Maior gasto: dia ${diaDoMaior}, valor ${maior}`
}

console.log(qualMaiorGasto([45, 120, 30, 88, 200, 800, 60, 95, 40, 300, 22, 18]))