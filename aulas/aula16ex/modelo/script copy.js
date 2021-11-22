let fnum = window.document.querySelector('input#fnum')
let sel = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let numeros = []
var mudou = false

//Números no select
function adicionar(m) {
    let idx = true
    let num = Number(fnum.value)

    for (let pos in numeros) {
        if (num == numeros[pos]) {
            idx = false
        }
    }
    if (num < 1 || num > 100 || idx == false || fnum.value.length == 0) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        numeros.push(num)
        if (m == true) {
            res.innerHTML = ''
        }
        let opt = window.document.createElement('option')
        opt.innerHTML += `Valor ${num} adicionado.<br>`
        sel.appendChild(opt) 
        mudou = false 
    }
}
//Cálculos com os números
function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else if (mudou == false) {
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0, media = 0;
        //Iteração no vetor
        for (let cont in numeros) {
            if (numeros[cont] > maior) {
                maior = numeros[cont]
            }
            if (numeros[cont] < menor) {
                menor = numeros[cont]
            }
            soma += numeros[cont]
        }
        media = soma / numeros.length
        mudou = true
        //Prints
        res.innerHTML += `<p>Ao todo temos ${numeros.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}</p>`  //Média com uma casa decimal
    }   
}