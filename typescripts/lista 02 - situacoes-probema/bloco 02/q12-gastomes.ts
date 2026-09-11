function somarTotalDoMes(gastosPorSemana: number[]): number {
    let totalDoMes = 0
    for (let semana = 0; semana < gastosPorSemana.length; semana++) {
        totalDoMes += gastosPorSemana[semana]
    }
    return totalDoMes
}

function semanaQuePassou(gastosPorSemana: number[]): number {
    let contador = 0
    for (let semana = 0; semana < gastosPorSemana.length; semana++) {
        if (gastosPorSemana[semana] > 400) {
            contador += 1
        }
    }
    return contador
}

console.log(somarTotalDoMes([470, 320, 610, 280]))
console.log(semanaQuePassou([470, 320, 610, 280]))