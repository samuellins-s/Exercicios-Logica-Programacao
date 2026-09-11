function mesesNoVermelho(gastosMensais: number[], orcamento: number): number {
    let quantidade = 0
    for (let mes = 0; mes < gastosMensais.length; mes++) {
        if (gastosMensais[mes] < orcamento) {
            quantidade += 1
        }
    }
    return quantidade
}

console.log(mesesNoVermelho([1400, 1600, 1500, 1800, 1200], 1500));