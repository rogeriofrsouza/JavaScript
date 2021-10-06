let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

// Código tradicional de percurso de vetor
for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Código moderno do ECMAScript para arrays/objects
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}