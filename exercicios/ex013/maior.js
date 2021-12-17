//Análise maior valor
function maior(a, b) {
    if ( a > b) {
        return a
    } else if (b > a) {
        return b
    }
}

function comecar() {
    //Variáveis
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número:'))
    let resultado = maior(n1, n2)

    //Prints
    let res = window.document.getElementById('resultado')
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${resultado}</strong></p>`
}