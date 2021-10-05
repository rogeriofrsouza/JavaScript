let num = [10, 25, 36, 34, 25, 180]
num.sort()
console.log(num)

let maior = num[0]
let menor = num[0]
let pares = 0
let impares = 0

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
console.log(`Qtd de pares: ${pares} | Ímpares: ${impares}`)