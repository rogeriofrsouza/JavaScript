//Cálculo par ou ímpar
function ParouImpar(n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

function calcular() {
    //Variáveis
    let num = Number(window.prompt('Digite um número:'))
    let resultado = ParouImpar(num)
    let res = window.document.getElementById('resultado')

    //Prints
    res.innerHTML = `<p>O número ${num} que foi digitado é: <strong style='color: red;'>${resultado}</strong>!</p>`
}