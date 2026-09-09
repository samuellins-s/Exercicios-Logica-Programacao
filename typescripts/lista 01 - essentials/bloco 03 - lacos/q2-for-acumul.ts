let soma: number = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        soma += i
    }
}

console.log(soma)