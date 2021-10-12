let num = [10, 45, 36, 64, 25, 18]
num.sort()
console.log(num)

let maior = num[0]
let menor = num[0]
let pares = 0, impares = 0

for (let pos in num) {
//for (let pos=0; pos<10; pos++) {
    if (num[pos] > maior) {
        maior = num[pos]
    }
    if (num[pos] < menor) {
        menor = num[pos]
    }
    if (num[pos] % 2 == 0) {
        pares += 1
    } else {
        impares += 1
    }
}

console.log(`Maior número: ${maior} | Menor número: ${menor}`)
console.log(`Qtd de pares: ${pares} | Ímpares: ${impares} | Total: ${num.length}`)