let fnum = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []
var mudou = false

//É um número válido?
function isNumero(n) {
    if (n >= 1 && n <= 100 && n.length != 0) {
        return true
    } else {
        return false
    }
} 
//O número está na lista?
function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}
//Adicionar números ao select
function adicionar() {  
    let num = Number(fnum.value)  
    if (isNumero(num) && !inLista(num, valores)) {
        valores.push(num)
        if (mudou == true) {
            res.innerHTML = ''
        }
        let item = window.document.createElement('option')
        item.innerHTML += `Valor ${num} adicionado.<br>`
        lista.appendChild(item) 
        mudou = false 
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    //Apaga o input e mantém o cursor nele
    fnum.value = ''
    fnum.focus()
}       
//Finalizar com os nºs do vetor
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else if (mudou == false) {
        let maior = menor = valores[0], soma = media = 0;
        //Iteração no vetor
        for (let cont in valores) {
            if (valores[cont] > maior) {
                maior = valores[cont]
            }
            if (valores[cont] < menor) {
                menor = valores[cont]
            }
            soma += valores[cont]
        }
        media = soma / valores.length
        mudou = true
        //Prints
        res.innerHTML += `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(0)}</p>`  //Média sem casa decimal
        res.innerHTML += `<p>Números digitados: ${valores}</p>`
    }   
}