let contador = 0
let res = window.document.querySelector('section#res')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar() {
    contador++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = ''   // Outra opção: res.innerHTML = null
}