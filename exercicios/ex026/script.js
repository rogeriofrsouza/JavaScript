function contar() {
    let start = Number(document.querySelector('#finicio').value)
    let final = Number(document.querySelector('#ffinal').value)
    let output = document.querySelector('#saida')

    let h2Element = document.createElement('h2')
    h2Element.textContent = `Contando de ${start} até ${final}`
    output.appendChild(h2Element)

    let pElement = document.createElement('p')

    if (start < final) {
        for (start; start <= final; start++) {
            pElement.innerHTML += `${start} \u{1F449} `
        }
    } else if (start > final) {
        for (start; start >= final; start--) {
            pElement.innerHTML += `${start} \u{1F449} `
        }
    } else {
        pElement.innerHTML = 'Não é possível contar, pois os números são iguais'
    }
    pElement.innerHTML += ` \u{1F3C1}`
    output.appendChild(pElement)
}