function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.querySelector('input#txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Digite um número novamente...'
        window.alert('ERRO: Impossível contar!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        } else if (p < 0 && i > f) {
            window.alert('Não precisa digitar um nº negativo. Sou um contador inteligente :)')
            p = Math.abs(p)
        } else if (p < 0 && i < f) {
            window.alert('Passo inválido! Considerando PASSO positivo')
            p = Math.abs(p)
        }
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        } else if (i > f) {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}