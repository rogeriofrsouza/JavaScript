let nomes = ['Rogério', 'Eliana', 'Maria', 'Bianca']
let idades = [21, 25, 39, 16]

nomes[4] = 'Marcela'
idades[4] = 32
nomes.push('Jéssica')
idades.push(45)

console.log(`Encontrei ${nomes.length} nomes/idades :)`)

idades.sort()
console.log(`As idades em ordem são: `)
console.log(idades.join(" | "))

for (let pos in nomes) {
    console.log(nomes[pos])
}

let i = nomes.indexOf('Maria')
if (i == -1){
    console.lof(`Não encontrei :(`)
} else {
    console.log(`Maria está na posição ${i}`)
}
