function statusOrcamento(gastoTotal: number, orcamento: number): string {
    if (gastoTotal <= orcamento) {
        return 'Dentro do orçamento'
    } else {
        return 'Fora do orçamento'
    }
}

console.log(statusOrcamento(1400, 1500))
console.log(statusOrcamento(1600, 1500))