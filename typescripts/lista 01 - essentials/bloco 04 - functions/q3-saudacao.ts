function saudacao(nome: string, saudacaoInicial: string = 'Olá'): string {
    return `${saudacaoInicial}, ${nome}!`
}

console.log(saudacao('Samuel'))
console.log(saudacao('Samuel', 'Bom dia'))