function cabeNoOrcamento(orcamentoMensal: number, aluguel: number, luz: number, internet: number): string {
    const somaContasFixas: number = aluguel + luz + internet

    if (somaContasFixas <= orcamentoMensal) {
        return 'Cabe no orçamento'
    } else {
        return 'Estourou o orçamento'
    }
}

console.log(cabeNoOrcamento(1500, 900, 150, 100))
console.log(cabeNoOrcamento(1500, 1400, 150, 100))