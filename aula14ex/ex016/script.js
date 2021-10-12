function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else if (num.value.length >= 8) {
        window.alert('[ERRO]: Digite um número menor!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n*c}<br/>`
            item.value = `tab${c}`  // Valor importante para outras linguagens
            tab.appendChild(item)
        }
        num.value = ''
        num.focus()
    }
}   